import { Inter, Josefin_Sans, Roboto } from "next/font/google"

export const josefins_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--josefin_sans",
})

export const inter = Inter({ subsets: ["latin"], variable: "--inter" })
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
})
