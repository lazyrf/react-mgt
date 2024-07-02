import React, {useState} from 'react';
import * as Icon from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import MenuConfig from '../../config';

const {Header, Content, Footer, Sider} = Layout;

// 動態獲取icon
const iconToEl = name => React.createElement(Icon[name]);

// 處理菜單的數據
const items = MenuConfig.map(menu => {
    // 沒有子菜單
    const child = {
        key: menu.path,
        icon: iconToEl(menu.icon),
        label: menu.label,
    }

    // 有子菜單
    if (menu.children) {
        child.children = menu.children.map(submenu => {
            return {
                key: submenu.path,
                label: submenu.label,
            };
        })
    }

    return child;
});

const CommonAside = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <h3 className="app-name">通用後台管理系統</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                style={{
                    height: '100%',
                }}
            />
        </Sider>
    );
};

export default CommonAside;
