import Mock from 'mockjs';

let List = [];

const homeData = {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    Apple: Mock.Random.float(100, 8000, 0, 0),
                    Vivo: Mock.Random.float(100, 8000, 0, 0),
                    Oppo: Mock.Random.float(100, 8000, 0, 0),
                    Asus: Mock.Random.float(100, 8000, 0, 0),
                    Samsung: Mock.Random.float(100, 8000, 0, 0),
                    XiaoMi: Mock.Random.float(100, 8000, 0, 0),
                })
            );
        }

        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'XiaoMi',
                        value: 2999,
                    },
                    {
                        name: 'Apple',
                        value: 5999,
                    },
                    {
                        name: 'Vivo',
                        value: 1500,
                    },
                    {
                        name: 'Oppo',
                        value: 1999,
                    },
                    {
                        name: 'Asus',
                        value: 2200,
                    },
                    {
                        name: 'Samsung',
                        value: 4500,
                    }
                ],
                userData: [
                    {
                        data: '週一',
                        new: 5,
                        active: 200,
                    },
                    {
                        data: '週二',
                        new: 10,
                        active: 500,
                    },
                    {
                        data: '週三',
                        new: 12,
                        active: 550,
                    },
                    {
                        data: '週四',
                        new: 60,
                        active: 800,
                    },
                    {
                        data: '週五',
                        new: 65,
                        active: 550,
                    },
                    {
                        data: '週六',
                        new: 53,
                        active: 700,
                    },
                    {
                        data: '週日',
                        new: 33,
                        active: 170,
                    },
                ],
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy: 24000
                    },
                    {
                        name: 'Apple',
                        todayBuy: 800,
                        monthBuy: 4500,
                        totalBuy: 65000
                    },
                    {
                        name: 'XiaoMi',
                        todayBuy: 1200,
                        monthBuy: 6500,
                        totalBuy: 45000
                    },
                    {
                        name: 'Samsung',
                        todayBuy: 300,
                        monthBuy: 2000,
                        totalBuy: 34000
                    },
                    {
                        name: 'Asus',
                        todayBuy: 350,
                        monthBuy: 3000,
                        totalBuy: 22000
                    },
                ]
            },
        }
    },
};

export default homeData;
