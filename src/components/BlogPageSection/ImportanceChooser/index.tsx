"use client"
import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { createPortal } from "react-dom"
import { tags } from "@/data/feed"
import { CheckboxComponent } from "@/components/CheckboxComponent"

interface IImportanceChooser extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export function ImportanceChooser({ children, className, ...rest }: IImportanceChooser) {
  const _cn = ` ${className ?? ""}`
  const [hasDocument, setHasDocument] = React.useState(false)
  const [importances, setImportances] = React.useState([] as string[])

  React.useEffect(() => {
    setHasDocument(true)
  }, [])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      {!hasDocument
        ? null
        : createPortal(
            <Dialog.Content className="absolute inset-0 z-40">
              <Dialog.Close className="absolute inset-0 bg-black/20 outline-none" />

              <div className={"absolute right-0 left-0 bottom-0 top-1/4 rounded-t-3xl bg-white" + _cn} {...rest}>
                <div className="h-3 flex justify-center">
                  <div className="w-12 relative">
                    <div className="absolute left-0 right-0 top-full h-1.5 rounded-full bg-zinc-300"></div>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  {tags.importances.map(tag => (
                    <CheckboxComponent key={tag.importance} label={tag.title} tag={tag.importance} theme="light" />
                  ))}
                </div>
              </div>
            </Dialog.Content>,
            document.querySelector("#portal")!
          )}
    </Dialog.Root>
  )
}
