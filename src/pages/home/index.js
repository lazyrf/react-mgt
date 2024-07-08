import React from 'react';
import {Row, Col, Card} from 'antd';
import './home.css';

const Home = () => {
    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable>
                    <div className="user">
                        <img src={require('../../assets/images/avatar.jpeg')} alt=""/>
                        <div className="userinfo">
                            <p className="name">Admin</p>
                            <p className="access">超級管理員</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p>上次登入時間:<span>2024-07-08</span></p>
                        <p>上次登入地點:<span>台中南屯區</span></p>
                    </div>
                </Card>
            </Col>
            <Col span={16}></Col>
        </Row>
    );
};

export default Home;
