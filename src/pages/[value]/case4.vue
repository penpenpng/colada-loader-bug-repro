<script lang="ts">
import { defineBasicLoader, withLoaderContext } from "vue-router/experimental";
import { defineColadaLoader } from "vue-router/experimental/pinia-colada";
import { getNext, NEXT_QUERY_KEY } from "../../lib";

const ROUTE_NAME = "/[value]/case4";

// Not exported
const useNextLoader = defineColadaLoader(ROUTE_NAME, {
  key: (route) => [ROUTE_NAME, ...NEXT_QUERY_KEY(route.params.value)],
  query: (route) => getNext(route.params.value),
});

export const useNextNextLoader = defineBasicLoader(ROUTE_NAME, async () => {
  // Using `withLoaderContext()`
  const next = await withLoaderContext(useNextLoader());

  const useNextNextLoader = defineColadaLoader(ROUTE_NAME, {
    key: () => [ROUTE_NAME, ...NEXT_QUERY_KEY(next)],
    query: () => getNext(next),
  });

  return useNextNextLoader();
});
</script>

<script setup lang="ts">
// const next = useNextLoader();
const nextNext = useNextNextLoader();
</script>

<template>
  <!-- <div>Next: {{ next.data }}</div> -->
  <div>NextNext: {{ nextNext.data }}</div>
  <router-link to="/">Home</router-link>
</template>
