import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
const {Header, Content, Footer, Sider} = Layout;


const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout className="main-container">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <h3 className="app-name">通用後台管理系統</h3>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            ion: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            ion: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            ion: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                    style={{
                        height: '100%',
                    }}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                            background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>

    );
};

export default Main;
