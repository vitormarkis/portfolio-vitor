import '../globals.css'
import { Montserrat } from 'next/font/google'

const monts = Montserrat({ subsets: ['latin'] })
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monts.className}>{children}</body>
    </html>
  )
}
