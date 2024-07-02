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
import CommonAside from '../components/commonAside';

const {Header, Content, Footer, Sider} = Layout;

                        // icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                        // onClick={() => setCollapsed(!collapsed)}

const Main = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout className="main-container">
            <CommonAside />

            <Layout>
                <Header
                    style={{
                        padding: 0,
                            background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
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
