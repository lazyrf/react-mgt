import React, {useEffect, useState} from 'react';
import {Row, Col, Card, Table} from 'antd';
import * as Icon from '@ant-design/icons';
import './home.css';
import {getData} from '../../api';

const columns = [
    {
        title: '課程',
        dataIndex: 'name',
    },
    {
        title: '今日購買',
        dataIndex: 'todayBuy',
    },
    {
        title: '本月購買',
        dataIndex: 'monthBuy',
    },
    {
        title: '總購買',
        dataIndex: 'totalBuy',
    },
];

const countData = [
    {
        'name': '今日支付訂單',
        'value': 1234,
        'icon': 'CheckCircleOutlined',
        'color': '#2ec7c9',
    },
    {
        'name': '今日收藏訂單',
        'value': 3421,
        'icon': 'ClockCircleOutlined',
        'color': '#ffb980',
    },
    {
        'name': '今日未支付訂單',
        'value': 1234,
        'icon': 'CloseCircleOutlined',
        'color': '#5ab1ef',
    },
    {
        'name': '本月支付訂單',
        'value': 1234,
        'icon': 'CheckCircleOutlined',
        'color': '#2ec7c9',
    },
    {
        'name': '本月收藏訂單',
        'value': 3421,
        'icon': 'ClockCircleOutlined',
        'color': '#ffb980',
    },
    {
        'name': '本月未支付訂單',
        'value': 1234,
        'icon': 'CloseCircleOutlined',
        'color': '#5ab1ef',
    },
];

const iconToElement = (name) => React.createElement(Icon[name]);

const Home = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        getData().then(({data}) => {
            const {tableData} = data.data;
            setTableData(tableData);
        });
    }, []);

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
                <Card>
                    <Table dataSource={tableData} columns={columns} pagination={false} rowKey={'name'} />
                </Card>
            </Col>
            <Col span={16}>
                <div className="num">
                    {
                        countData.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <div className="icon-box" style={{background: item.color}}>
                                        {iconToElement(item.icon)}
                                    </div>
                                    <div className="detail">
                                        <p className="num">${item.value}</p>
                                        <p className="txt">{item.name}</p>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
            </Col>
        </Row>
    );
};

export default Home;
