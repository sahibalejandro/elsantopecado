<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import { find } from "@/store/products.js";
import { useCartStore } from "@/store/CartStore";
import Quantity from "@/components/Quantity.vue";

const cartStore = useCartStore();
const route = useRoute();
const product = find(Number(route.params.id));
const type = product.types[Number(route.params.typeIndex)];

const quantity = ref(1);
const topins = ref([]);

function add() {
  cartStore.addItem({
    product: product.name,
    topins: topins.value,
    quantity: quantity.value,
    type: type.name,
  });
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold"> {{ product.name }} </h2>
    <h3 class="text-xl font-bold">{{ type.name }}</h3>

    <div class="grid gap-4 mt-4">
      <label v-for="topin in type.topins" class="flex justify-between">
        <div>{{ topin }}</div>
        <input type="checkbox" :value="topin" v-model="topins">
      </label>
    </div> 

    <Quantity class="mt-8" v-model="quantity" />

    <div class="flex justify-center mt-8">
      <button type="button" class="button" @click="add">Agregar al carrito</button>
    </div>
  </section>
</template>
