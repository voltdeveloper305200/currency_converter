<script setup>
import { computed } from "vue";
import ContentCard from "../components/UI/ContentCard.vue";
import CurrencyList from "../components/CurrencyList.vue";
import Search from "../components/Search.vue";
import useCurrenciesStore from "../stores/Currencies";

const store = useCurrenciesStore();

const currencies = computed(() => {
  return store.searchResult;
});

</script>

<template>
  <ContentCard class="currencies-content">
    <div>
      <h3 class="text-24">Курсы валют:</h3>
      <Search class="mt-24" />
      <CurrencyList :currency-list="currencies" :is-loading="store.isLoading" />
    </div>
  </ContentCard>
</template>

<style lang="scss" scoped></style>
