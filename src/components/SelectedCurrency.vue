<template>
  <div class="currency">
    <div class="currency__title">{{ selectedCurrencyCharCode }} - RUB</div>
    <div class="currency__rates--wrap">
      <div class="currency__rates">1 <b>{{ selectedCurrencyCharCode }}</b> - {{ baseCurrencyValue }} <b>RUB</b></div>
      <div class="currency__rates">
        1 <b>RUB</b> - {{ selectedCurrencyValue }} <b>{{ selectedCurrencyCharCode }}</b>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  selectedCurrencyCharCode: { type: String, required: true },
  selectedCurrencyValue: { type: Number, required: true },
  baseCurrencyValue: { type: Number, required: true },
});
</script>

<style lang="scss">
.currency {
  height: 100%;
  padding: 20px;
  margin-left: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &_rates {
    font-size: 15px;
  }
}
</style>
