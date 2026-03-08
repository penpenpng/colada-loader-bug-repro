<script lang="ts">
import { defineBasicLoader, withLoaderContext } from "vue-router/experimental";
import { defineColadaLoader } from "vue-router/experimental/pinia-colada";
import { getJust, JUST_QUERY_KEY } from "../lib";

const ROUTE_NAME = "/casey";

export const useOneLoader = defineColadaLoader(ROUTE_NAME, {
  key: () => [ROUTE_NAME, ...JUST_QUERY_KEY(1)],
  query: () => getJust(1),
});

export const useTwoLoader = defineColadaLoader(ROUTE_NAME, {
  key: () => [ROUTE_NAME, ...JUST_QUERY_KEY(2)],
  query: () => getJust(2),
});

const complexCalculation = async (x: number, y: number) => {
  return x + y;
};

export const useThreeLoader = defineBasicLoader(ROUTE_NAME, async () => {
  const one = await withLoaderContext(useOneLoader());
  const two = await useTwoLoader();

  return complexCalculation(one, two);
});
</script>

<script setup lang="ts">
const { data } = useThreeLoader();
</script>

<template>
  <div>{{ data }}</div>
  <router-link to="/">Home</router-link>
</template>
