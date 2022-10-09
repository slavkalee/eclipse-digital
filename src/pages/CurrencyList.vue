<template>
  <div class="currency--list">
    <h1 class="currency--list__title">Курсы валют ЦБ РФ</h1>

    <div class="currency--list__wrapper">
      <div class="currency--list__table--container">
        <SearchBar :value="searchValue" :onChange="handleChange" />

        <CurrencyDataTable
          :data="displayCurrencies"
          @handleClickToRow="updateSelectedCurrency"
          v-memo="[searchValue, displayCurrencies]"
        />
      </div>

      <div class="currency--list__info--container">
        <SelectedCurrency
          v-if="selectedCurrency"
          :selectedCurrencyCharCode="selectedCurrency"
          :selectedCurrencyValue="selectedCurrencyValue"
          :baseCurrencyValue="baseCurrencyValue"
          v-memo="[selectedCurrency]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCurrencies } from '@/compositions/currencies';
import { useSearch } from '@/compositions/search';
import { useSelectedCurrency } from '@/compositions/selectedCurrency';

import { filterBy } from '@/helpers/utils';
import CurrencyDataTable from '@/components/CurrencyDataTable.vue';
import SearchBar from '@/components/SearchBar.vue';
import SelectedCurrency from '@/components/SelectedCurrency.vue';

const {
  selectedCurrency,
  updateSelectedCurrency,
  baseCurrencyValue,
  selectedCurrencyValue,
} = useSelectedCurrency();
const { searchValue, handleChange } = useSearch();
const { currencies } = useCurrencies();

const displayCurrencies = computed(() => {
  return filterBy(currencies.value, searchValue.value);
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

  &__table--container {
    width: 70%;
  }

  &__info--container {
    width: 30%;
    height: 100%;
    position: sticky;
    top: 20px;
  }
}
</style>
