import { createRouter, createWebHistory } from "vue-router";
import Currencies from "./pages/Currencies.vue";
import Converter from "./pages/Converter.vue";

const routes = [
  {
    path: "/",
    component: Currencies,
    meta: {
      title: "Валюты",
    },
  },
  {
    path: "/converter",
    component: Converter,
    meta: {
      title: "Конвертер",
    },
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
