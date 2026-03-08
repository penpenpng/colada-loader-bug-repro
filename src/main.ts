import { PiniaColada } from "@pinia/colada";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { handleHotUpdate, routes } from "vue-router/auto-routes";
import { DataLoaderPlugin } from "vue-router/experimental";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes,
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

app
  .use(DataLoaderPlugin, { router })
  .use(router)
  .use(pinia)
  .use(PiniaColada, {
    queryOptions: {
      staleTime: 60_000, // 1 minute
      gcTime: 300_000, // 5 minutes
    },
  })
  .mount("#app");
