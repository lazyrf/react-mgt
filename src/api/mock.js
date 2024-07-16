import Mock from 'mockjs';
import homeApi from './mockServerData/home';
import userApi from './mockServerData/user';

// 攔截接口
Mock.mock(/home\/getData/, homeApi.getStatisticalData)
Mock.mock(/user\/getUser/, userApi.getUserList)
Mock.mock(/user\/createUser/, 'post', userApi.createUser)
Mock.mock(/user\/editUser/, 'post', userApi.updateUser)
Mock.mock(/user\/deleteUser/, 'post', userApi.deleteUser)
