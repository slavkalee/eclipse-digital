import { createStore } from 'vuex';
import currenciesModule from '@/store/modules/currencies';
import ratesModule from '@/store/modules/rates';

const store = createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    currenciesModule,
    ratesModule,
  },
});

export default store;
