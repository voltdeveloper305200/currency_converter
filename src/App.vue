<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import useCurrenciesStore from "./stores/Currencies";
import MobileMenu from "./components/MobileMenu.vue";
const route = useRoute();

const store = useCurrenciesStore();

onMounted(() => {
  store.fetchCurrencies();
});
</script>

<template>
  <div class="main-content mt-24">
    <div class="container">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-12 md:col-span-3">
          <div class="logo">
            <img width="150" src="/images/logo.svg" alt="" />
          </div>
        </div>
        <div class="col-span-12 md:col-span-9 mt-24 md:mt-0">
          <div class="pages-info">
            <a href="" class="pages-info__title text-24 font-500 text-basic">{{
              route.meta.title
            }}</a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-24 gap-x-24">
        <div class="col-span-3 hidden md:block">
          <Sidebar />
        </div>
        <MobileMenu class="flex md:hidden" />
        <div class="col-span-12 md:col-span-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
