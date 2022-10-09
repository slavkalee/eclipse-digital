import { useCurrencies } from '@/compositions/currencies';
import { computed, ref } from 'vue';

export function useConverter() {
  const { currencies, currenciesObject } = useCurrencies();

  const selected = ref(['RUB', 'USD']);
  const amount = ref('');
  const resultAmount = ref(null);

  const displayCurrencies = computed(() => {
    return [{ CharCode: 'RUB' }, ...currencies.value];
  });

  const handleConvert = () => {
    let defaultValute = {
      Value: 1,
      Nominal: 1,
    };

    let firstValute =
        currenciesObject.value[selected.value[0]] ?? defaultValute,
      firstValuteValue = firstValute.Value * Number(amount.value),
      firstValuteNominal = firstValute.Nominal;

    let secondValute =
        currenciesObject.value[selected.value[1]] ?? defaultValute,
      secondValuteValue = secondValute.Value,
      secondValuteNominal = secondValute.Nominal;

    let result =
      firstValuteValue /
      firstValuteNominal /
      (secondValuteValue / secondValuteNominal);

    resultAmount.value = result ? Math.floor(result * 10000) / 10000 : null;
  };

  const reverseSelected = () => {
    selected.value.reverse();
    handleConvert();
  };

  return {
    amount,
    selected,
    resultAmount,
    displayCurrencies,
    handleConvert,
    reverseSelected,
  };
}
