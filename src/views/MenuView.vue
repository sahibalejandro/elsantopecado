<script setup>
import Product from "@/components/Product.vue";
import products from "@/store/products.js";
</script>

<template>
  <section class="grid gap-4">
    <Product v-for="product in products" v-bind="product" />
  </section>
</template>
