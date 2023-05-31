"use client"
import React, { CSSProperties, HTMLAttributes } from "react"
import ReactDOM from "react-dom"
import * as Dialog from "@radix-ui/react-dialog"
import st from "@/components/ConfirmDialog.module.css"
import clsx from "clsx"
import twc from "tailwindcss/colors"
import Button from "@/components/Button"

interface IConfirmDialog extends React.ComponentProps<"div"> {
  title: string
  description: string
  handleActionButton: HTMLAttributes<HTMLAnchorElement>["onClick"]
  cancelText?: string | undefined
  doText?: string | undefined
  children: React.ReactNode
}

export function ConfirmDialog({
  cancelText,
  description,
  handleActionButton,
  doText,
  title,
  children,
  className,
  ...rest
}: IConfirmDialog) {
  const _cn = ` ${className ?? ""}`
  const [hasDocument, setHasDocument] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setHasDocument(true)
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      {hasDocument
        ? ReactDOM.createPortal(
            <Dialog.Content className={st.root}>
              <div className={st.dark} onClick={() => setOpen(false)} />
              <div className={clsx(st.container, _cn)} {...rest}>
                <h2 className={clsx(st.title, "text-zinc-700")}>{title}</h2>
                <p className={clsx(st.description, "text-zinc-500")}>{description}</p>
                <div className={st.buttonsWrapper}>
                  <Dialog.Close
                    className={clsx(
                      st.button,
                      st.buttonCancel,
                      "bg-rose-600 border-rose-700 outline-raw focus:outline-rose-600"
                    )}
                  >
                    <span>{cancelText ?? "Cancelar"}</span>
                  </Dialog.Close>
                  <Button
                    onClick={e => {
                      if (handleActionButton) handleActionButton(e)
                      setOpen(false)
                    }}
                    backgroundColor="luminescent"
                    className={clsx(st.button, "outline-accent")}
                  >
                    <span>{doText ?? "Confirmar"}</span>
                  </Button>
                </div>
              </div>
            </Dialog.Content>,
            document.querySelector("#portal")!
          )
        : null}
    </Dialog.Root>
  )
}
