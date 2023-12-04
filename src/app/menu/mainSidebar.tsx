'use client'
import React, { useState } from 'react';
import {
  RocketFilled,
  SettingFilled,
  InfoCircleFilled,
} from '@ant-design/icons';
import { Layout, Menu, List } from 'antd';
import type { MenuProps } from 'antd';
import { getItem } from "./commonFunction"
import { clickMainMenuButtonHandler } from "../handler/menuHandler"

type MenuItem = Required<MenuProps>['items'][number];

const MenuStyle: React.CSSProperties = {
  overflowY: "auto",
  maxHeight: "100vh",
}

const mainMenuItems: MenuItem[] = [
  getItem('启动', 'quickLauncherMenu', <RocketFilled />),
  getItem('设置', 'mainSettingsMenu', <SettingFilled />),
  getItem('关于', 'aboutMenu', <InfoCircleFilled />),
]

for (let i = 1; i <= 30; i++) {
  mainMenuItems.push(getItem('关于', `aboutMenu${i}`, <InfoCircleFilled />));
}

let selectedKey = mainMenuItems.at(0)?.key as string


const MainMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;

  return (
    <>
      <div style={{ maxHeight: "100%" }}>
        <Sider theme="light" style={MenuStyle} collapsed={collapsed}>
          <Menu
            defaultSelectedKeys={[selectedKey]}
            mode="vertical"
            items={mainMenuItems}
            onClick={clickMainMenuButtonHandler}
          />
        </Sider>
      </div>
    </>
  )
};

export default MainMenu;