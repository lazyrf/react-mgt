import React, {useState, useEffect} from 'react';
import {Button, Form, Input, Table, Popconfirm, Modal, InputNumber, Select, DatePicker} from 'antd';
import dayjs from 'dayjs';
import './user.css';
import {getUser, createUser, editUser, deleteUser} from '../../api';

const User = () => {
    const [search, setSearch] = useState({name: ''});
    const [tableData, setTableData] = useState([]);
    // 0: 新增, 1: 編輯
    const [modalType, setModalType] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleClick = (type, rowData) => {
        setIsModalOpen(state => !state);
        if (type === 'add') {
            setModalType(0);
        } else if (type === 'edit') {
            setModalType(1);
            const cloneData = JSON.parse(JSON.stringify(rowData));
            cloneData.birth = dayjs(cloneData.birth);
            // 表單數據回填
            form.setFieldsValue(cloneData);
        }
    };

    const onFinish = (e) => {
        setSearch({name: e.keyword});
    };

    const getTableData = () => {
        getUser(search).then(({data}) => {
            setTableData(data.list);
        });
    };

    useEffect(() => {
        getTableData();
    }, [search]);

    const handleOk = () => {
        form.validateFields().then((val) => {
            val.birth = dayjs(val.birth).format('YYYY-MM-DD');
            console.log(val);

            if (modalType) {
                // 編輯
                editUser(val).then(() => {
                    setIsModalOpen(state => !state);
                    form.resetFields();
                    getTableData();
                });
            } else {
                // 新增
                createUser(val).then(() => {
                    setIsModalOpen(state => !state);
                    form.resetFields();
                    getTableData();
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleDelete = ({id}) => {
        deleteUser({id}).then(() => {
            getTableData();
        });
    };


    const handleCancel = () => {
        setIsModalOpen(state => !state);
    };

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
                    <div style={{display: 'flex'}}>
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
            <Table style={{marginTop: '10px'}} columns={columns} dataSource={tableData} rowKey={'id'}/>
            <Modal
                title={modalType ? '編輯用戶' : '新增用戶'}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="確定"
                cancelText="取消"
            >
                <Form
                    form={form}
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    labelAlign="left"
                >
                    { modalType === 1 &&
                        <Form.Item
                            name="id"
                            hidden
                        >
                            <Input />
                        </Form.Item>
                    }

                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '請輸入姓名'
                            }
                        ]}
                    >
                        <Input placehodler="請輸入姓名"/>
                    </Form.Item>

                    <Form.Item
                        label="年齡"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: '請輸入年齡',
                            },
                            {
                                type: 'number',
                                message: '年齡必須是數值',
                            }
                        ]}
                    >
                        <InputNumber placeholder="請輸入年齡"/>
                    </Form.Item>

                    <Form.Item
                        label="性別"
                        name="sex"
                        rules={[
                            {
                                required: true,
                                message: '性別是必選',
                            },
                        ]}
                    >
                        <Select
                            placeholder="請選擇性別"
                            options={[
                                {value: 0, 'label': '女'},
                                {value: 1, 'label': '男'},
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        label="出生日期"
                        name="birth"
                        rules={[
                            {
                                required: true,
                                message: '請選擇出生日期',
                            },
                        ]}
                    >
                        <DatePicker
                            placeholder="請選擇日期"
                            format="YYYY/MM/DD"
                        />
                    </Form.Item>

                    <Form.Item
                        label="地址"
                        name="addr"
                        rules={[
                            {
                                required: true,
                                message: '請填寫地址',
                            },
                        ]}
                    >
                        <Input placeholder="請填寫地址" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default User;
