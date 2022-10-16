<template>
  <div class="currency--list">
    <h1 class="currency--list__title">Курсы валют ЦБ РФ</h1>

    <div class="currency--list__container">
      <div class="currency--list__table--container">
        <div class="currency--list__top--wrap">
          <div class="currency--list__search">
            <SearchBar :value="searchValue" :onChange="handleChange" />
          </div>

          <div class="currency--list__select">
            <select v-model="selected">
              <option v-for="curr in charCodes" :key="curr">{{ curr }}</option>
            </select>
          </div>
        </div>

        <CurrencyDataTable :data="displayCurrencies" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCurrencies } from '@/compositions/currencies';
import { useSearch } from '@/compositions/search';
import { useSelect } from '@/compositions/select';
import { useRate } from '@/compositions/rate';
import { filterBy } from '@/helpers/utils';
import CurrencyDataTable from '@/components/CurrencyDataTable.vue';
import SearchBar from '@/components/SearchBar.vue';

const { searchValue, handleChange } = useSearch();
const { currencies, charCodes, defaultCurrency } = useCurrencies();
const { selected } = useSelect('RUB');
const { getRate } = useRate();

const baseCurrency = computed(() => {
  return currencies.value[selected.value];
});

const displayCurrencies = computed(() => {
  const currenciesArray = [
    defaultCurrency,
    ...Object.values(currencies.value),
  ].map((currency) => {
    const currencyCopy = { ...currency };

    if (baseCurrency.value && baseCurrency.value.CharCode !== 'RUB') {
      const rate = getRate(currency, baseCurrency.value);

      currencyCopy.Value = rate.toFixed(4);
    }

    return currencyCopy;
  });

  return filterBy(currenciesArray, searchValue.value);
});
</script>

<style lang="scss" scoped>
.currency--list {
  position: relative;

  &__title {
    margin-bottom: 40px;
  }

  &__top--wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  &__search {
    width: 78%;
  }

  &__select {
    width: 20%;
  }

  &__table--container {
    width: 100%;
  }
}

.main__currency {
  margin-bottom: 30px;
}
</style>
