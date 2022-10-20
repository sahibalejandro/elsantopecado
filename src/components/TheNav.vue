<script setup>
import { RouterLink } from 'vue-router';
import TheCart from './TheCart.vue';
</script>

<template>
  <section class="flex justify-between px-4">
    <RouterLink to="/">Menú</RouterLink>
    <TheCart />
  </section>
</template>
