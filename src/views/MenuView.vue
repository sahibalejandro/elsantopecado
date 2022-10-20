<script setup>
import Product from '@/components/Product.vue';
import Promos from '@/components/Promos.vue';
import products from '@/store/products.js';
</script>

<template>
  <Promos />
  <h2 class="text-center text-xl font-bold mt-8">Santo Pecado Menú</h2>
  <section class="grid gap-4 mt-4">
    <Product v-for="product in products" v-bind="product" />
  </section>
</template>
