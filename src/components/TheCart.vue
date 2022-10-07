<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from "@/store/CartStore";

const cartStore = useCartStore();
</script>

<template>
  <RouterLink to="/cart">Carrito{{ cartStore.itemsCount > 0 ? ` (${cartStore.itemsCount})` : '' }}</RouterLink>
</template>
