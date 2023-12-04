/* eslint-disable react/no-array-index-key */
'use client'
import React, { useState } from 'react';
import { Flex, Layout, theme, Divider } from 'antd';

const { Header, Content, Footer } = Layout;

import MainMenu from "./menu/mainSidebar"
import DefaultToolPage from './tool-page/default/page';

const toolContentStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

const WindowStyle: React.CSSProperties = {
  boxSizing: "border-box",
  margin: 0,
}

const App: React.FC = () => {
  const [selectedToolPage, setSelectedToolPage] = useState(DefaultToolPage);

  return (
    <>
      <body style={WindowStyle}>
        <Layout>
          <MainMenu />
          <Content style={toolContentStyle}>
            {selectedToolPage}
          </Content>
        </Layout>
      </body>
    </>
  );
};

export default App;