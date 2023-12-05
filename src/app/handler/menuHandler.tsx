import type {
    MenuClickEventHandler,
} from 'rc-menu/lib/interface';

export const clickMainMenuButtonHandler: MenuClickEventHandler = ({ key, keyPath, domEvent }) => {
    console.log(`Selected key: ${key}`);
    // for (const view of MainMenuViews) {
    //     if (key == view.key) {
    //         console.log("find page")
    //     }
    // }
};

export const saveLauchWindowSettingsHandler = (width: number, height: number, fullscreen: boolean, popUpWindow: boolean): void => {
    console.log("test");
}
