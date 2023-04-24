import "../globals.css"
import { Montserrat, Josefin_Sans } from "next/font/google"

const monts = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Vitor Markis | Portfólio",
  description:
    "Portfólio de Vitor Markis, desenvolvedor fullstack em React, Node e Next.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={monts.className}>{children}</body>
    </html>
  )
}
