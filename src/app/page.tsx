/* eslint-disable react/no-array-index-key */
'use client'
import React, { useState } from 'react';
import { Layout, theme } from 'antd';

const { Header, Content, Footer } = Layout;

import {getMainMenu} from "./menu/main-sidebar"

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const mainMenu = getMainMenu();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {mainMenu}
      <Layout>

      </Layout>
    </Layout>
  );
};

export default App;