import currenciesApi from '@/api/currencies';

const state = {
  isLoading: false,
  data: {},
  errors: null,
};

export const actionTypes = {
  getCurrencies: '[currencies] Get currencies',
};

export const mutationTypes = {
  getCurrenciesStart: '[currencies] Get currencies start',
  getCurrenciesSuccess: '[currencies] Get currencies success',
  getCurrenciesFailure: '[currencies] Get currencies failure',
};

export const getterTypes = {
  currencies: '[currencies] Currencies',
  currenciesObject: '[currencies] Currencies object',
  currencyByCharCode: '[currencies] Currency by char code',
};

const mutations = {
  [mutationTypes.getCurrenciesStart](state) {
    state.isLoading = true;
  },
  [mutationTypes.getCurrenciesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getCurrenciesFailure](state, errors) {
    state.isLoading = false;
    state.errors = errors;
  },
};

const actions = {
  [actionTypes.getCurrencies]({ commit }) {
    commit(mutationTypes.getCurrenciesStart);
    return new Promise((resolve) => {
      currenciesApi
        .getCurrencies()
        .then((currencies) => {
          commit(mutationTypes.getCurrenciesSuccess, currencies);
          resolve(currencies);
        })
        .catch((err) => {
          commit(mutationTypes.getCurrenciesFailure, err);
        });
    });
  },
};

const getters = {
  [getterTypes.currencies](state) {
    if (state.data) {
      return Object.values(state.data);
    }
  },
  [getterTypes.currencyByCharCode]: (state) => (charCode) => {
    return state.data[charCode];
  },
  [getterTypes.currenciesObject](state) {
    return state.data;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
