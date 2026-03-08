<script setup lang="ts">
const value = 0;
</script>

<template>
  <ul>
    <li>
      <RouterLink :to="{ name: '/[value]/case1', params: { value } }">
        case1 (not working)
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: '/[value]/case2', params: { value } }">
        case2 (works)
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: '/[value]/case3', params: { value } }">
        case3 (works)
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: '/[value]/case4', params: { value } }">
        case4 (works)
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: '/casex' }">casex (not working)</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: '/casey' }">casey (works)</RouterLink>
    </li>
  </ul>
</template>
