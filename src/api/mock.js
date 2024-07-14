import Mock from 'mockjs';
import homeApi from './mockServerData/home';
import userApi from './mockServerData/user';

// 攔截接口
Mock.mock(/home\/getData/, homeApi.getStatisticalData)
Mock.mock(/user\/getUser/, userApi.getUserList)
