<script setup>
import { RouterView } from "vue-router";
import TheNav from "./components/TheNav.vue";
</script>

<template>
  <header class="mt-4">
    <TheNav />
  </header>

  <section class="mt-4 px-4">
    <RouterView />
  </section>
</template>
