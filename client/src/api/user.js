import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export default {
  getSocialUsersList: () => {
    return axios.get(BASE_URL + '/api/users/info');
  },
};
