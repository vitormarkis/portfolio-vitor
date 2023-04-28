import { Header } from "@/components/Header"
import { Inter } from "next/font/google"
import "../globals.css"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
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
