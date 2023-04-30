import { Inter, Josefin_Sans, Roboto, JetBrains_Mono } from "next/font/google"

export const josefins_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--josefin_sans",
})

export const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic", "cyrillic-ext", "greek", "latin-ext", "vietnamese"],
  variable: "--jetbrains",
})
export const inter = Inter({ subsets: ["latin"], variable: "--inter" })
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
})
