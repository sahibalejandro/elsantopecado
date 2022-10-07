<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <button @click="router.back()">Atrás</button>
</template>
