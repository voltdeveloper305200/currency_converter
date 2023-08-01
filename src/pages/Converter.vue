<script setup>
import ContentCard from "../components/UI/ContentCard.vue";
import ConvertGive from "../components/ConvertGive.vue";
import ConvertReceive from "../components/ConvertReceive.vue";
import useCurrenciesStore from "../stores/Currencies";
const store = useCurrenciesStore();
</script>

<template>
  <ContentCard>
    <div class="currency-converter">
      <div class="grid grid-cols-12">
        <div class="col-span-12">
          <ConvertGive />
        </div>
        <div class="col-span-12 flex justify-center mt-18">
          <img
            @click="store.swapCurrency"
            class="swap-icon"
            width="30"
            src="/images/icons/swap-green.svg"
            alt=""
          />
        </div>
        <div class="col-span-12">
          <ConvertReceive />
        </div>
      </div>
    </div>
  </ContentCard>
</template>

<style lang="scss" scoped>
.swap-icon {
  user-select: none;
  cursor: pointer;
}
</style>
