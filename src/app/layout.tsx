import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import StyledComponentsRegistry from '../lib/AntdRegistry'
import { Flex, Layout } from 'antd';

import MainMenu from "./menu/mainSidebar"


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
      <body className={inter.className} suppressHydrationWarning style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <Layout>
            <Flex >
              <div id='sidebarMenu' style={{ minWidth: "5vw", maxWidth: "20vw" }}>
                <MainMenu />
              </div>
              <Layout style={{ maxWidth: "calc(100vw - var(--sidebar-width))" }}>
                {children}
              </Layout>
            </Flex>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
