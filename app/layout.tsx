import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import { Providers } from './Providers'

import './globals.css'


export const metadata: Metadata = {
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
      <body className={`${GeistSans.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
