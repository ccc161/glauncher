'use client'
import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { clickMainMenuButtonHandler } from "../handler/menuHandler";
// import { mainMenuItems } from "./menuItem";
import MainMenuViews from '../data/menuData';

import type { MenuProps } from 'antd';
import { MenuItem } from 'rc-menu';
import { fromMenuViewToMenuItem } from '../view/menuView';
const { Sider } = Layout;

const MenuStyle: React.CSSProperties = {
  overflowY: "auto",
  minHeight: "100vh",
  maxHeight: "100vh",
  overflowX: "hidden",
}


type MenuItem = Required<MenuProps>['items'][number];





const MainMenu = () => {
  // const initialCollapsed = (typeof window !== 'undefined') ? (window.innerWidth < 800) : false
  const [collapsed, setCollapsed] = useState<boolean>(true);

  function handleCollapse(value: boolean) {
    setCollapsed(value)
  }
  
  useEffect(() => {

    
    // Function to check screen size and update the flag
    
    const checkScreenSize = () => {
      setCollapsed(window.innerWidth < 800);
    };

    function handleCollapse(value: boolean) {
      setCollapsed(value)
    }
    const handleResize = () => {
      // setCollapsed(window.innerWidth < 800);
    };
    if (typeof window !== 'undefined') {
      // Attach the event listener
      window.addEventListener('resize', handleResize);

      // Remove the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  let mainMenuItems: MenuItem[] = []

  for (const menuView of MainMenuViews) {
    const menuItem = fromMenuViewToMenuItem(menuView)
    mainMenuItems.push(menuItem)
  }

  return (
    <>
        <Sider theme='light' style={MenuStyle} collapsed={collapsed} onCollapse={handleCollapse}>
          <Menu theme="light" defaultSelectedKeys={[]} mode="inline" items={mainMenuItems} />
        </Sider>
    </>
  )
};

export default MainMenu;