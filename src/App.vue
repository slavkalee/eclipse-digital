<template>
  <div class="container">
    <nav class="menu">
      <router-link class="menu__link" :to="{ name: 'currencies' }">
        Список Валют
      </router-link>
      <router-link class="menu__link" :to="{ name: 'converter' }">
        Конвертер
      </router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCurrencies } from '@/compositions/currencies';
import { useRates } from '@/compositions/rates';

const { fetchCurrencies } = useCurrencies();
const { fetchRates } = useRates();

onMounted(() => {
  fetchCurrencies();
  fetchRates();
});
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  margin: 50px auto;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    padding: 10px 15px;
    text-decoration: none;
    color: #000;

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 43, 66, 0.87);
    }
  }
}

main {
  margin-top: 50px;
}

</style>
