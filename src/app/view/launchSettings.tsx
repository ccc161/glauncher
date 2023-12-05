export interface ResolutionSettingsView {
    id: number,
    name: string,
    width: number,
    height: number
}

export default function createResolutionSettingsView(
    id: number, name: string, width: number, height: number
): ResolutionSettingsView {
    return { id: id, name: name, width: width, height: height }
}

export interface launchSettingsView {
    width: number,
    height: number,
    fullScreen: boolean,// 是否全屏
    popWindow: boolean,// 是否无边框
    monitorId: number, // 在哪个显示器运行
}