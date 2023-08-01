<script setup>
import { computed } from "vue";
import useCurrenciesStore from "../stores/Currencies";
import { validateInput } from "../utils/validateValue";

const input = computed({
  get: () => store.amountFrom,
  set: (value) => store.typeAmountFrom(value),
});

const store = useCurrenciesStore();

const convertCurrency = () => {
  validateInput(store.amountFrom, store.typeAmountFrom);
  store.convertCurrency()
};
</script>

<template>
  <div class="convert-give">
    <h5 class="text-16 text-basic">У меня есть</h5>
    <div class="input-block mt-10">
      <input
        @input="convertCurrency"
        v-model="input"
        class="main-input"
        type="text"
      />
      <div class="select">
        <select class="main-select" @change="store.selectCurrencyGive">
          <option
            v-for="currency in store.filterCurrencyGive"
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