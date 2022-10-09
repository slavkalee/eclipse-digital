import { ref } from 'vue';
import { debounce } from '@/helpers/utils';

export function useSearch() {
  const searchValue = ref('');

  const handleChange = debounce((event) => {
    searchValue.value = event.target.value;
  }, 500)

  return {
    searchValue,
    handleChange,
  };
}
