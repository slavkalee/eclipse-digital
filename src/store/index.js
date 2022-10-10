import { createStore } from 'vuex';
import currenciesModule from '@/store/modules/currencies';

const store = createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    currenciesModule,
  },
});

export default store;
