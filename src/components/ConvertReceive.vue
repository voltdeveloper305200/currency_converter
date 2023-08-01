<script setup>
import useCurrenciesStore from "../stores/Currencies";

const store = useCurrenciesStore();
</script>

<template>
  <div class="convert-give">
    <h5 class="text-16 text-basic">Хочу приобрести</h5>
    <div class="input-block mt-10">
      <input
        readonly
        v-model="store.amountTo"
        class="main-input"
        type="text"
      />
      <div class="select">
        <select
          v-model="store.selectedCurrencyReceive"
          class="main-select"
          @change="store.selectCurrencyReceive"
        >
          <option
            v-for="currency in store.filterCurrencyReceive"
            :key="currency.value"
            :value="currency.CharCode"
          >
            {{ currency.CharCode }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
