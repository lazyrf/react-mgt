import React from 'react';
import {Form, Input, Button, message} from 'antd';
import './index.css';
import {getMenu} from '../../api';
import {useNavigate, Navigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // 在登入狀態下，需要跳轉到home頁面
    if (localStorage.getItem('token')) {
        return <Navigate to="/home" replace/>
    }

    const handleSubmit = (val) => {
        if (!val.password || !val.username) {
            return message.open({
                type: 'warning',
                content: '請輸入帳號或密碼',
            });
        }

        getMenu(val).then(({data}) => {
            console.log(data);
            localStorage.setItem('token', data.data.token);
            navigate('/home');
        });
    };

    return (
        <Form className="login-container" onFinish={handleSubmit}>
            <div className="login_title">系統登入</div>
            <Form.Item
                label="帳號"
                name="username"
            >
                <Input placehodler="請輸入帳號"/>
            </Form.Item>
            <Form.Item
                label="密碼"
                name="password"
            >
                <Input.Password placehodler="請輸入密碼"/>
            </Form.Item>
            <Form.Item
                className="login-button"
            >
                <Button type="primary" htmlType="submit">登入</Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
