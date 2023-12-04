'use client'
import React, { useState } from 'react';
import {
    RocketFilled,
    SettingFilled,
    InfoCircleFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { getItem } from "./common-function"

type MenuItem = Required<MenuProps>['items'][number];

const mainMenuItems: MenuItem[] = [
    getItem('快捷启动', 'quickLauncherMenu', <RocketFilled />),
    getItem('设置', 'mainSettingsMenu', <SettingFilled />),
    getItem('关于', 'aboutMenu', <InfoCircleFilled />),
]

const selectedKey = mainMenuItems.at(0)?.key as string

export function getMainMenu() {
    const [collapsed, setCollapsed] = useState(false);

    const { Sider } = Layout;

    return (
        <>
            <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu defaultSelectedKeys={[selectedKey]} mode="vertical" items={mainMenuItems} />
            </Sider>
        </>
    )
}