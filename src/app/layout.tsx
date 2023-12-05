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
          <Row wrap={false} align={'top'} gutter={[0, 0]} style={{minHeight: "100vh"}}>
            <Col flex="none">
              <MainMenu />
            </Col>
            <Col flex="auto">
              {children}
            </Col>
          </Row>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
