<script setup>
import { RouterLink } from "vue-router";

defineProps({
  id: Number,
  name: String,
  types: Array,
});
</script>

<template>
  <h2 class="text-2xl font-bold"> {{ name }} </h2>
  <RouterLink v-for="(type, index) in types" :to="`/product/${id}/${index}`">
    {{ type.name }}
  </RouterLink>
</template>
