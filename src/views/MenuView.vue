<script setup>
import Product from "@/components/Product.vue";
import ThePromos from "@/components/ThePromos.vue";
import products from "@/store/products.js";
</script>

<template>
  <ThePromos />
  <h2 class="text-center text-xl font-bold mt-8">Santo Pecado Menú</h2>
  <section class="grid gap-4 mt-4">
    <Product v-for="product in products" :key="product.id" v-bind="product" />
  </section>
</template>
