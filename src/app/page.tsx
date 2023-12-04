'use client'
import React, { useState } from 'react';
import { Flex, Layout, theme, Divider } from 'antd';

const { Header, Content, Footer } = Layout;

import MainMenu from "./menu/mainSidebar"
import DefaultToolPage from './tool-page/default/page';

const App: React.FC = () => {
  const [selectedToolPage, setSelectedToolPage] = useState(DefaultToolPage);

  return (
    <>
      <body suppressHydrationWarning>
        <div style={{
          width: "100%",
          maxHeight: "100%",
          margin: 0,
          borderLeft: 0,
          borderRight: 0,
          borderTop: 0,
          borderBottom: 0
        }}>
          <Layout>
            <Flex >
              <MainMenu />
              <Layout>
                <Content>
                  {selectedToolPage}
                </Content>
              </Layout>
            </Flex>
          </Layout>
        </div>
      </body>
    </>
  );
};

export default App;