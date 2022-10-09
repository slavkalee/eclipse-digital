import { computed } from 'vue';
import { useStore } from 'vuex';
import { actionTypes, getterTypes } from '@/store/modules/rates';

export function useRates() {
  const store = useStore();

  const fetchRates = () => {
    store.dispatch(actionTypes.getRates);
  };

  const rates = computed(() => {
    return store.getters[getterTypes.allRates];
  });

  return {
    fetchRates,
    rates,
  };
}
