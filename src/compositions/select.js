import { ref } from 'vue';

export function useSelect(initialValue) {
  const selected = ref(initialValue);

  return {
    selected,
  }
}