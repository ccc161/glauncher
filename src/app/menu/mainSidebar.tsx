'use client'
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { clickMainMenuButtonHandler } from "../handler/menuHandler";
// import { mainMenuItems } from "./menuItem";
import MainMenuViews from "../entity/menu"

import type { MenuProps } from 'antd';
import { MenuItem } from 'rc-menu';
import { fromMenuViewToMenuItem } from '../entity/menu';


const MenuStyle: React.CSSProperties = {
  overflowY: "auto",
  maxHeight: "100vh",
}

type MenuItem = Required<MenuProps>['items'][number];

let mainMenuItems: MenuItem[] = []

for (const menuView of MainMenuViews) {
  const menuItem = fromMenuViewToMenuItem(menuView)
  mainMenuItems.push(menuItem)
}

let selectedKey = mainMenuItems.at(0)?.key as string

const MainMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible theme='light' style={MenuStyle} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={mainMenuItems} />
        </Sider>
      </Layout>
    </>
  )
};

export default MainMenu;