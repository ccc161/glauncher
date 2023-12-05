import type {
    MenuClickEventHandler,
} from 'rc-menu/lib/interface';
import MainMenuViews from '../entity/menuEntity'

export const clickMainMenuButtonHandler: MenuClickEventHandler = ({ key, keyPath, domEvent }) => {
    console.log(`Selected key: ${key}`);
    // for (const view of MainMenuViews) {
    //     if (key == view.key) {
    //         console.log("find page")
    //     }
    // }
};
