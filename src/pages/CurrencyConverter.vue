<template>
  <div class="converter">
    <h1 class="converter__title">Конвертер</h1>

    <div class="converter__row">
      <div class="converter__from">
        <fieldset class="field--container">
          <select v-model="selected[0]" @change="handleConvert">
            <option v-for="curr in charCodes" :key="curr">{{ curr }}</option>
          </select>
        </fieldset>

        <fieldset class="field--container">
          <input
            class="input"
            type="number"
            v-model="amount"
            @keyup="debounceConvertHandler"
          />
        </fieldset>
      </div>

      <div class="converter__reverse">
        <button class="converter__reverse--btn" @click="reverseSelected">
          <ReverseIcon fill="#FFF" />
        </button>
      </div>

      <div class="converter__to">
        <fieldset class="field--container">
          <select v-model="selected[1]" @change="handleConvert">
            <option v-for="curr in charCodes" :key="curr">{{ curr }}</option>
          </select>
        </fieldset>

        <fieldset class="field--container">
          <input class="input" type="number" v-model="resultAmount" :readonly="true" />
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCurrencies } from '@/compositions/currencies';
import { useConverter } from '@/compositions/converter';
import { debounce } from '@/helpers/utils';
import ReverseIcon from '@/components/icons/ReverseIcon.vue';

const { charCodes } = useCurrencies();
const {
  amount,
  resultAmount,
  selected,
  handleConvert,
  reverseSelected,
} = useConverter();

const debounceConvertHandler = debounce(handleConvert, 300);
</script>

<style lang="scss" scoped>
.converter {
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    margin-bottom: 40px;
  }

  &__from {
    width: 40%;
  }

  &__to {
    width: 40%;
  }

  &__reverse {
    &--btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: rgba(18, 43, 66, 0.87);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}

.field--container {
  border: none;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
