import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import StyledComponentsRegistry from '../lib/AntdRegistry'
import { Flex, Layout } from 'antd';
import { Col, Divider, Row } from 'antd';

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
          <Row wrap={false}>
            <div id='sidebarMenu' style={{ minWidth: "5vw", maxWidth: "20vw" }}>
              <MainMenu />
            </div>
              <div style={{maxWidth: "100%", maxHeight: "100%"}}>
                {children}
              </div>
          </Row>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
