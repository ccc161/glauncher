import { RocketFilled, SettingFilled, InfoCircleFilled } from "@ant-design/icons"
import type { MenuProps } from 'antd';
import Link from 'next/link'
import AboutPage from "../tool-page/about/page";
import LauncherPage from "../tool-page/launcher/page";
import SettingsPage from "../tool-page/settings/page";
type MenuItem = Required<MenuProps>['items'][number];

export interface MenuItemView {
    key: React.Key,
    name: string,
    path: string,
    icon: React.ReactNode,
    children: MenuItemView[],
}

export function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

export function fromMenuViewToMenuItem(view: MenuItemView): MenuItem {
    let children:MenuItem[] = []
    for (let i = 0; i < view.children.length; i++) {
        const childView = view.children.at(i)
        if (childView !== undefined) {
            children.push(fromMenuViewToMenuItem(childView));
        } else {
            console.error("view.children.at" + i.toString() + " returned undefined");
        }
    }
    const label = (view.path !== '') ? (<Link href={view.path}>{view.name}</Link>) : (<a>{view.name}</a>)
    if (children.length > 0) {
        return getItem(label, view.key, view.icon, children);
    }
    return getItem(label, view.key, view.icon)
}