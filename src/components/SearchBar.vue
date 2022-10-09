<template>
  <fieldset class="form--field">
    <input
      class="input input__search"
      type="text"
      :value="value"
      @input="onChange($event)"
    />
    <div class="form--field__search--icon">
      <SearchIcon fill="#CCC" />
    </div>
  </fieldset>
</template>

<script setup>
import { defineProps } from 'vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';

const props = defineProps({
  value: { type: String, required: true },
  onChange: { type: Function, required: true },
});
</script>

<style lang="scss" scoped>
.form--field {
  position: relative;
  border: none;
  margin-bottom: 20px;
  
  &__search--icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
}
</style>
