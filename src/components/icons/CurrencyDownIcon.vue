<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.70627 11.4137L11.2963 14.0037C11.6863 14.3937 12.3163 14.3937 12.7063 14.0037L15.2963 11.4137C15.9263 10.7837 15.4763 9.70374 14.5863 9.70374H9.40627C8.51627 9.70374 8.07627 10.7837 8.70627 11.4137Z"
      :fill="fill"
      fill-opacity="1"
    />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  width: { type: Number, required: false, default: 24 },
  height: { type: Number, required: false, default: 24 },
  fill: { type: String, required: false, default: 'black' },
});
</script>
