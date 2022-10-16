<template>
  <div class="container">
    <Tabs />
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCurrencies } from '@/compositions/currencies';
import Tabs from '@/components/Tabs.vue';

const { fetchCurrencies } = useCurrencies();

onMounted(() => {
  fetchCurrencies();
});
</script>

<style lang="scss" scoped>
.container {
  width: 70%;
  margin: 50px auto;
}

main {
  margin-top: 50px;
}
</style>
