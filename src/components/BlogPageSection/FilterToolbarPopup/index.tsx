"use client"
import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { createPortal } from "react-dom"
import { FilterBlogContent, SortBlogContent } from "@/components/BlogPageSection"

interface IFilterToolbarPopup extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export function FilterToolbarPopup({ children, className, ...rest }: IFilterToolbarPopup) {
  const _cn = ` ${className ?? ""}`
  const [hasDocument, setHasDocument] = React.useState(false)

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

              <div className={"absolute right-0 left-0 bottom-0 top-[15%] rounded-t-3xl bg-white" + _cn} {...rest}>
                <div className="h-3 flex justify-center mb-6">
                  <div className="w-12 relative">
                    <div className="absolute left-0 right-0 top-full h-1.5 rounded-full bg-zinc-300"></div>
                  </div>
                </div>
                <div className="px-6">
                  <h2 className="font-medium text-center mb-1.5">Filtro</h2>
                  <FilterBlogContent />
                  <h2 className="font-medium text-center mb-1">Ordenar por</h2>
                  <SortBlogContent />
                </div>
              </div>
            </Dialog.Content>,
            document.querySelector("#portal")!
          )}
    </Dialog.Root>
  )
}
