<script setup>
import useCurrenciesStore from "../stores/Currencies";

const store = useCurrenciesStore();
</script>

<template>
  <div class="search-currency">
    <input
      class="main-input"
      placeholder="Поиск..."
      v-model="store.searchQuery"
      type="text"
    />
  </div>
</template>

<style lang="scss" scoped></style>
