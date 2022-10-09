<template>
  <table>
    <thead>
      <tr>
        <th align="left">Цифр. код</th>
        <th align="left">Букв. код</th>
        <th align="right">Единиц</th>
        <th align="left">Валюта</th>
        <th align="left">Курс</th>
      </tr>
    </thead>

    <tbody>
      <template v-if="data.length">
        <tr
          v-for="curr in data"
          :key="curr.ID"
          @click="clickToRow(curr.CharCode)"
        >
          <td>{{ curr.NumCode }}</td>
          <td>{{ curr.CharCode }}</td>
          <td align="right">{{ curr.Nominal }}</td>
          <td>{{ curr.Name }}</td>
          <td>{{ curr.Value }}</td>
          <td class="rating">
            <template v-if="curr.Value > curr.Previous">
              <CurrencyUpIcon :width="30" :height="30" fill="green" />
              <span class="difference"
                >(+{{ (curr.Value - curr.Previous).toFixed(3) }})</span
              >
            </template>
            <template v-else>
              <CurrencyDownIcon :width="30" :height="30" fill="red" />
              <span class="difference"
                >(-{{ +(curr.Previous - curr.Value).toFixed(3) }})</span
              >
            </template>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';
import CurrencyUpIcon from '@/components/icons/CurrencyUpIcon.vue';
import CurrencyDownIcon from '@/components/icons/CurrencyDownIcon.vue';

const props = defineProps({
  data: { type: Array, required: true },
});

const emits = defineEmits(['handleClickToRow']);

const clickToRow = (currencyCode) => {
  emits('handleClickToRow', currencyCode);
};
</script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}
tr {
  border-bottom: 1px solid #ccc;
}

tbody {
  tr {
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background: rgb(236, 236, 236);
    }
  }

  td {}
}

th,
td {
  padding: 20px 10px;
}

.difference {
  white-space: nowrap;
}

.rating {
  display: flex;
  align-items: center;
}
</style>
