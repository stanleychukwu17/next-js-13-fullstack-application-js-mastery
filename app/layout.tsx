import type { Metadata } from 'next'
import { Inter, Source_Sans_3 } from 'next/font/google'
import HeaderComp from './components/Header/HeaderComp'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prompting',
  description: 'Generate the next winner content using Ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComp />
        <div className="mainChild">
          {children}
        </div>
      </body>
    </html>
  )
}
