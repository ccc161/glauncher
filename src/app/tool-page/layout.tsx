import type { Metadata } from 'next'

import { Flex, Layout } from 'antd';
import { Col, Divider, Row } from 'antd';



export const metadata: Metadata = {
  title: 'GLauncher',
  description: 'A game launcher designed with convenient tools for an enhanced gaming experience.',
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flex style={{
      maxHeight: "100%",
      marginLeft: "1vw",
      marginRight: "1vw",
      marginTop: "0",
      marginBottom: "0",
      backgroundColor: "green"
    }}>
      {children}
    </Flex>
  )
}
