import ratesApi from '@/api/rates';

const state = {
  isLoading: false,
  data: null,
  errors: null,
};

export const actionTypes = {
  getRates: '[rates] Get rates',
};

export const mutationTypes = {
  getRatesStart: '[rates] Get rates start',
  getRatesSuccess: '[rates] Get rates success',
  getRatesFailure: '[rates] Get rates failure',
};

export const getterTypes = {
  allRates: '[rates] All rates',
  rateByCharCode: '[rates] Rate by char code'
};

const mutations = {
  [mutationTypes.getRatesStart](state) {
    state.isLoading = true;
  },
  [mutationTypes.getRatesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getRatesFailure](state, err) {
    state.isLoading = false;
    state.errors = err;
  },
};

const actions = {
  [actionTypes.getRates]({ commit }) {
    commit(mutationTypes.getRatesStart);
    return new Promise((resolve) => {
      ratesApi
        .getRates()
        .then((rates) => {
          commit(mutationTypes.getRatesSuccess, rates);
          resolve(rates);
        })
        .catch((err) => {
          commit(mutationTypes.getRatesFailure, err);
        });
    });
  },
};

const getters = {
  [getterTypes.allRates]() {
    if (state.data) {
      return state.data;
    }
  },
  [getterTypes.rateByCharCode]: (state) => (charCode) => {
    return state.data[charCode];
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
