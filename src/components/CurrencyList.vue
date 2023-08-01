<script setup>
import { defineProps } from "vue";
import CurrencyItem from "./CurrencyItem.vue";

defineProps({
  currencyList: {
    type: Array,
    required: true,
  },
  isLoading: Boolean,
});
</script>

<template>
  <div class="currency-list">
    <div v-if="currencyList.length">
      <CurrencyItem
        :currency="currency"
        v-for="(currency, index) in currencyList"
        :key="index"
      />
    </div>
    <div class="mt-24 text-center" v-if="!currencyList.length && !isLoading">
      <h3>Валюты по запросу не найдены</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
