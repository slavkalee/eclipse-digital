import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { getterTypes as currenciesGetterTypes } from '@/store/modules/currencies';
import { getterTypes as ratesGetterTypes } from '@/store/modules/rates';

export function useSelectedCurrency() {
  const store = useStore();

  const selectedCurrency = ref('');

  const updateSelectedCurrency = (currencyCode) => {
    selectedCurrency.value = currencyCode;
  };

  const getBaseCurrencyValue = computed(() => {
    return store.getters[currenciesGetterTypes.currencyByCharCode](
      selectedCurrency.value
    );
  });

  const baseCurrencyValue = computed(() => {
    return +(
      getBaseCurrencyValue.value?.Value / getBaseCurrencyValue.value?.Nominal
    ).toFixed(3);
  });

  const selectedCurrencyValue = computed(() => {
    return +store.getters[ratesGetterTypes.rateByCharCode](
      selectedCurrency.value
    ).toFixed(3);
  });

  return {
    selectedCurrency,
    updateSelectedCurrency,
    getBaseCurrencyValue,
    baseCurrencyValue,
    selectedCurrencyValue,
  };
}
