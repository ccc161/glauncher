import { Menu } from 'antd';
import type { MenuItemProps, MenuProps } from 'antd'
import type {
    MenuClickEventHandler,
} from 'rc-menu/lib/interface';

export const clickMainMenuButtonHandler: MenuClickEventHandler = ({ key, keyPath, domEvent }) => {
    console.log(`Selected key: ${key}`);
    
    // You can perform additional actions based on the selected key
};
