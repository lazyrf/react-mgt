import Mock from 'mockjs';
import homeApi from './mockServerData/home';

// 攔截接口
Mock.mock(/home\/getData/, homeApi.getStatisticalData)
