import { Menu } from 'antd';
import type { MenuItemProps, MenuProps } from 'antd'
import type {
    SelectEventHandler,
} from 'rc-menu/lib/interface';

export const clickMainMenuButtonHandler: SelectEventHandler = ({ key, keyPath, selectedKeys, domEvent }) => {
    console.log(`Selected key: ${key}`);
    
    // You can perform additional actions based on the selected key
};
