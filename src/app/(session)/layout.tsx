import { Header } from "@/components/Header"
import { inter, josefins_sans, roboto, jetbrains } from "@/fonts"
import { Metadata } from "next"
import "../globals.css"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Vitor Markis | Portfólio",
  description: "Portfólio de Vitor Markis, desenvolvedor fullstack em React, Node e Next.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} ${inter.variable} ${josefins_sans.variable} ${roboto.variable} ${jetbrains.variable}`}
      >
        <div className="root-height overflow-x-hidden scroll-thin overflow-y-scroll">
          <Header />
          {children}
          <Footer />
        </div>
        <div id="portal" />
      </body>
    </html>
  )
}
