import axios from '@/api/axios';

const getCurrencies = () => {
  return axios.get('/daily_json.js').then((response) => response.data.Valute);
};

export default {
  getCurrencies,
};
