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
    <>
      <Row style={{ margin: 0, height: "100%", width: "100%" , minHeight: "100vh", maxWidth: "100vw"}}>
        <Col flex={1} style={{}}>
            {children}
        </Col>
      </Row>
    </>

  )
}
