<script setup>
import { defineProps } from "vue";

defineProps({
  currency: {
    type: Object,
    required: true,
  },
});

const getDifferentRate = (currency) => {
  return (currency.Value - currency.Previous).toFixed(3);
};
</script>

<template>
  <div class="currency-card flex items-center justify-between mt-18">
    <span class="text-14 md:text-18 text-basic">
      1 {{ currency.CharCode }} = {{ currency.Value }} RUB</span
    >
    <div class="currency-different flex items-center">
      <span class="text-12 md:text-16" v-if="getDifferentRate(currency) > 0"
        >+ {{ getDifferentRate(currency) }}</span
      >
      <span class="text-12 md:text-16" v-else>{{ getDifferentRate(currency) }}</span>
      <div class="currency-different__arrows ms-8">
        <img
          v-if="getDifferentRate(currency) > 0"
          width="10"
          src="/images/icons/arrow-top.svg"
          alt=""
        />
        <img v-else width="12" src="/images/icons/arrow-bottom.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.currency-card {
  padding: 12px;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 15px 30px -10px rgba(60, 60, 60, 0.05);
  border-radius: 12px;
}
</style>
