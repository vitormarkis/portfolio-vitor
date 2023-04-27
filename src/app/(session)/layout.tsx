import { Header } from "@/components/Header"
import "../globals.css"
import { Montserrat, Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <div className="root-height overflow-x-hidden scroll-thin overflow-y-scroll">
          <Header />
          {children}
        </div>
        <div id="portal" />
      </body>
    </html>
  )
}
