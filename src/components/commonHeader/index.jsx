import React, {useState} from 'react';
import {Button, Layout, Avatar} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import './index.css';

const {Header, Content, Footer, Sider} = Layout;

const CommonHeader = () => {
    return (
        <Header className="header-container">
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff',
                }}
            />
            <Avatar size={36} src={<img src={require('../../assets/images/avatar.jpeg')} />}/>
        </Header>
    );
};

export default CommonHeader;
