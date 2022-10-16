import { computed } from 'vue';
import { useStore } from 'vuex';
import { actionTypes, getterTypes } from '@/store/modules/currencies';

export function useCurrencies() {
  const store = useStore();

  const fetchCurrencies = () => {
    store.dispatch(actionTypes.getCurrencies);
  };

  const currencies = computed(() => store.getters[getterTypes.currencies]);

  const charCodes = computed(() => {
    return ['RUB', ...store.getters[getterTypes.charCodes]];
  });

  const defaultCurrency = {
    NumCode: 643,
    Name: 'Российский рубль',
    CharCode: 'RUB',
    Value: 1,
    Nominal: 1,
  };

  return {
    currencies,
    fetchCurrencies,
    charCodes,
    defaultCurrency
  };
}
