import React, {useEffect, useState} from 'react';
import {Row, Col, Card, Table} from 'antd';
import * as Icon from '@ant-design/icons';
import * as echarts from 'echarts';
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

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

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
                <div id="main" style={{height: '300px'}}></div>
            </Col>
        </Row>
    );
};

export default Home;
