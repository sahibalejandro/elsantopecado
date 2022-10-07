<script setup>
import { useCartStore } from "@/store/CartStore";

const cartStore = useCartStore();

function placeOrder() {
  console.log("Place order with", cartStore.items);
}
</script>

<template>
  <section v-for="item in cartStore.items">
    <h2 class="text-2xl font-bold">{{ item.product }}</h2>
    <h3 class="text-xl font-bold">{{ item.quantity }}x {{ item.type }}</h3>
    <ul class="list-disc list-inside">
      <li v-for="topin in item.topins">{{ topin }}</li>
    </ul>
  </section>

  <div class="text-center">
    <button class="button" type="button" @click="placeOrder">Hacer Pedido</button>
  </div>
</template>
