import { useCurrencies } from '@/compositions/currencies';

export function useRate() {
  const { defaultCurrency } = useCurrencies();

  const getRate = (firstValue, secondValue) => {
    const from = firstValue ?? defaultCurrency;
    const to = secondValue ?? defaultCurrency;

    const valueFrom = from.Value / from.Nominal;
    const valueTo = to.Value / to.Nominal;

    return valueFrom / valueTo;
  };

  return {
    defaultCurrency,
    getRate,
  };
}
