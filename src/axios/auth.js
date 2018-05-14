/* eslint-disable dot-notation */
import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://vue-vuex-axios.firebaseio.com',
});

instance.defaults.headers.common['Something'] = 'Something';
export default instance;
