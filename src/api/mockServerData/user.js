import Mock from 'mockjs';

function param2Obj(url) {
    const search = url.split('?')[1];
    if (!search) {
        return {};
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/g/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    );
}

let list = [];
const count = 200;

for (let i = 0; i < count; i++) {
    list.push(
        Mock.mock({
            id: Mock.Random.guid(),
            name: Mock.Random.cname(),
            addr: Mock.mock('@country(true)'),
            'age|18-60': 1,
            birth: Mock.Random.date(),
            sex: Mock.Random.integer(0, 1),
        })
    );
}

const user = {
    getUserList: config => {
        const {name, page = 1, limit = 20} = param2Obj(config.url);
        const mockList = list.filter(user => {
            if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) {
                return false;
            }
            return true;
        });
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));
        return {
            code: 20000,
            count: mockList.length,
            list: pageList,
        }
    },
    createUser: config => {
        const {name, addr, age, birth, sex} = JSON.parse(config.body);
        list.unshift({
            id: Mock.Random.guid(),
            name,
            addr,
            age,
            birth,
            sex
        });
        return {
            code: 20000,
            data: {
                message: '添加成功'
            },
        };
    },
    updateUser: config => {
        const {id, name, addr, age, birth, sex} = JSON.parse(config.body);
        const sex_num = parseInt(sex);
        list.some(u => {
            if (u.id === id) {
                u.name = name;
                u.addr = addr;
                u.age = age;
                u.birth = birth;
                u.sex = sex_num;
                return true;
            }
            return false;
        });
        return {
            code: 20000,
            data: {
                message: '編輯成功'
            },
        };
    },
    deleteUser: config => {
        const {id} = JSON.parse(config.body);
        if (!id) {
            return {
                code: -999,
                message: '參數不正確',
            };
        } else {
            list = list.filter(u => u.id !== id);
            return {
                code: 20000,
                message: '刪除成功',
            }
        }
    },
};

export default user;
