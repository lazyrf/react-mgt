import React, {useState} from 'react';
import * as Icon from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import MenuConfig from '../../config';
import {useNavigate} from 'react-router-dom';

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

const CommonAside = ({collapsed}) => {
    const navigate = useNavigate();

    const selectMenu = (e) => {
        console.log(e);
        navigate(e.key);
    };

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <h3 className="app-name">{ collapsed ? '後台' : '通用後台管理系統'}</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                style={{
                    height: '100%',
                }}
                onClick={selectMenu}
            />
        </Sider>
    );
};

export default CommonAside;
