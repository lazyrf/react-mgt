import React, {useEffect, useState} from 'react';
import {Row, Col, Card, Table} from 'antd';
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
            <Col span={16}></Col>
        </Row>
    );
};

export default Home;
