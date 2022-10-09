import axios from '@/api/axios';

const getRates = () => {
  return axios.get('/latest.js').then((response) => response.data.rates);
};

export default {
  getRates,
};
