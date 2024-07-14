import React, {useState, useEffect} from 'react';
import {Button, Form, Input, Table, Popconfirm} from 'antd';
import './user.css';
import {getUser} from '../../api';

const User = () => {
    const [search, setSearch] = useState({name: ''});
    const [tableData, setTableData] = useState([]);

    const handleClick = (type, rowData) => {
    };

    const handleDelete = (rowData) => {
    };

    const onFinish = (e) => {
        console.log(e);
        setSearch({name: e.keywork});
    };

    useEffect(() => {
        getUser(search).then(({data}) => {
            setTableData(data.list);
        });
    }, []);

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年齡',
            dataIndex: 'age',
        },
        {
            title: '性別',
            dataIndex: 'sex',
            render: (value) => {
                return value ? '男' : '女';
            },
        },
        {
            title: '出生日期',
            dataIndex: 'birth',
        },
        {
            title: '地址',
            dataIndex: 'addr',
        },
        {
            title: '操作',
            render: (rowData) => {
                return (
                    <div className="flex-box">
                        <Button style={{marginRight: '5px'}} onClick={() => handleClick('edit', rowData)}>編輯</Button>
                        <Popconfirm
                            title="提示"
                            description="此操作將刪除該用戶，是否繼續?"
                            okText="確認"
                            cancelText="取消"
                            onConfirm={() => handleDelete(rowData)}
                        >
                            <Button type="primary" danger>刪除</Button>
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="user">
            <div className="flex-box">
                <Button type="primary" onClick={() => handleClick('add')}>+新增</Button>
                <Form
                    layout='inline'
                    onFinish={onFinish}
                >
                    <Form.Item name="keyword">
                        <Input placeholder="請輸入用戶名"/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">搜索</Button>
                    </Form.Item>
                </Form>
            </div>
            <Table columns={columns} dataSource={tableData} rowKey={'id'}/>
        </div>
    );
};

export default User;
