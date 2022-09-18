import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/enterprises';

export default {
  getSocialUsersList: () => {
    return axios.get(BASE_URL + '/enterpriseInfo');
  },
  getCacheAndCoinList: () => {
    return axios.get(BASE_URL + '/coinAndCacheInfo');
  },
  getServiceList: () => {
    return axios.get(BASE_URL + '/serviceInfo');
  },
  getUsersServiceList: () => {
    return axios.get(BASE_URL + '/userServiceInfo');
  },
  getUsersAccessHistory: () => {
    return axios.get(BASE_URL + '/socialAccessRecord');
  },
  getEnterpriseAccessHistory: () => {
    return axios.get(BASE_URL + '/enterpriseAccessRecord');
  },
};
