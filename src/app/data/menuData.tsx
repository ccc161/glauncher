import { RocketFilled, SettingFilled, InfoCircleFilled } from "@ant-design/icons"
import { MenuItemView } from "../entity/menuEntity";

let MainMenuViews: MenuItemView[] = [
    {
        key: "launcherMenu",
        name: "启动",
        path: '/tool-page/launcher',
        icon: <RocketFilled />,
        children: []
    },
    {
        key: "mainSettingsMenu",
        name: "设置",
        path: '/tool-page/settings',
        icon: <SettingFilled />,
        children: []
    },
    {
        key: "aboutMenu",
        name: "关于",
        path: '/tool-page/about',
        icon: <InfoCircleFilled />,
        children: []
    },
]

for (let i = 0; i < 3; i++) {
    MainMenuViews.push({
        key: (Math.random() * 100).toString(),
        name: "关于",
        path: '/tool-page/about',
        icon: <InfoCircleFilled />,
        children: []
    });
}

export default MainMenuViews;