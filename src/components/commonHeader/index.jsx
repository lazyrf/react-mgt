import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Layout, Avatar, Dropdown} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SimleOutlined
} from '@ant-design/icons';
import './index.css';
import {collapseMenu} from '../../store/reducers/tab';
import {useNavigate} from 'react-router-dom';

const {Header} = Layout;

const CommonHeader = ({collapsed}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        // 清除token
        localStorage.removeItem('token');
        navigate('/login');
    };

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    個人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={logout} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            ),
        },
    ];

    const setCollapse = () => {
        dispatch(collapseMenu());
    };

    return (
        <Header className="header-container">
            <Button
                type="text"
                icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff',
                }}
                onClick={setCollapse}
            />
            <Dropdown
                menu={{items}}>
                <Avatar size={36} src={<img src={require('../../assets/images/avatar.jpeg')} />}/>
            </Dropdown>
        </Header>
    );
};

export default CommonHeader;
