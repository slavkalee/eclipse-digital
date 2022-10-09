<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.70627 12.5862L11.2963 9.99624C11.6863 9.60624 12.3163 9.60624 12.7063 9.99624L15.2963 12.5862C15.9263 13.2162 15.4763 14.2962 14.5863 14.2962H9.40627C8.51627 14.2962 8.07627 13.2162 8.70627 12.5862Z"
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
