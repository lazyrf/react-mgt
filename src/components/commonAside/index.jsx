import React, {useState} from 'react';
import * as Icon from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import MenuConfig from '../../config';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {selectMenuList} from '../../store/reducers/tab';

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
    const dispatch = useDispatch();

    // 添加數據到store
    const setTabsList = (val) => {
        dispatch(selectMenuList(val));
    };

    const selectMenu = (e) => {
        console.log(e);
        let data;
        MenuConfig.forEach(item => {
            if (item.path === e.keyPath[e.keyPath.length - 1]) {
                data = item;
                // 如果有二級菜單
                if (e.keyPath.length > 1) {
                    data = item.children.find(child => {
                        return child.path === e.key;
                    });
                }
            }
        });
        setTabsList({
            path: data.path,
            name: data.name,
            label: data.label,
        });
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
