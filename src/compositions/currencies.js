import { computed } from 'vue';
import { useStore } from 'vuex';
import { actionTypes, getterTypes } from '@/store/modules/currencies';

export function useCurrencies() {
  const store = useStore();

  const fetchCurrencies = () => {
    store.dispatch(actionTypes.getCurrencies);
  };

  const currencies = computed(() => store.getters[getterTypes.currencies]);

  const currenciesObject = computed(() => store.getters[getterTypes.currenciesObject])

  return {
    currencies,
    currenciesObject,
    fetchCurrencies,
  };
}
