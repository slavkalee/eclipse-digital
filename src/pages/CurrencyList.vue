<template>
  <div class="currency--list">
    <h1 class="currency--list__title">Курсы валют ЦБ РФ</h1>

    <div class="currency--list__wrapper">
      <div class="currency--list__table--container">
        <SearchBar :value="searchValue" :onChange="handleChange" />

        <CurrencyDataTable
          :data="displayCurrencies"
          v-memo="[searchValue, displayCurrencies]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCurrencies } from '@/compositions/currencies';
import { useSearch } from '@/compositions/search';
import { filterBy } from '@/helpers/utils';

import CurrencyDataTable from '@/components/CurrencyDataTable.vue';
import SearchBar from '@/components/SearchBar.vue';

const { searchValue, handleChange } = useSearch();
const { currencies } = useCurrencies();

const displayCurrencies = computed(() => {
  const currenciesArray = Object.values(currencies.value);

  return filterBy(currenciesArray, searchValue.value);
});
</script>

<style lang="scss" scoped>
.currency--list {
  position: relative;

  &__title {
    margin-bottom: 40px;
  }

  &__wrapper {
    display: flex;
  }
}
</style>
