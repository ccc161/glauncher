import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import StyledComponentsRegistry from '../lib/AntdRegistry'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GLauncher',
  description: 'A game launcher designed with convenient tools for an enhanced gaming experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
