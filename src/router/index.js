import { createRouter, createWebHistory } from 'vue-router';
import CurrencyList from '@/pages/CurrencyList.vue';

const routes = [
  {
    path: '/',
    name: 'currencies',
    component: CurrencyList,
  },
  {
    path: '/converter',
    name: 'converter',
    component: () => import('@/pages/CurrencyConverter.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
