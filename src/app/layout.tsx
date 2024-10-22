import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import { Provider } from '@/components/layout/provider'

const Montserrat = localFont({
  src: './fonts/Montserrat_wght.ttf',
  variable: '--font-montserrat',
  weight: '100 900',
})
const MontserratItalic = localFont({
  src: './fonts/Montserrat-Italic_wght.ttf',
  variable: '--font-montserrat-italic',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Portfólio de Otávio Alencar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${Montserrat.variable} ${MontserratItalic.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
