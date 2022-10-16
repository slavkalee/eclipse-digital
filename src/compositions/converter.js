import { ref } from 'vue';
import { useCurrencies } from '@/compositions/currencies';
import { useSelect } from '@/compositions/select';
import { useRate } from '@/compositions/rate';

export function useConverter() {
  const { currencies } = useCurrencies();
  const { selected } = useSelect(['RUB', 'USD']);
  const { getRate } = useRate();

  const amount = ref(null);
  const resultAmount = ref(null);

  const handleConvert = () => {
    const rate =
      getRate(
        currencies.value[selected.value[0]],
        currencies.value[selected.value[1]]
      ) * Number(amount.value);

    resultAmount.value = rate.toFixed(4);

    if (!amount.value) resultAmount.value = null;
  };

  const reverseSelected = () => {
    selected.value.reverse();
    handleConvert();
  };

  return {
    amount,
    selected,
    resultAmount,
    handleConvert,
    reverseSelected,
  };
}
