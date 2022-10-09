<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import { find } from "@/store/products.js";
import { useCartStore } from "@/store/CartStore";
import Quantity from "@/components/Quantity.vue";
import { currency } from "@/utils";

const cartStore = useCartStore();
const route = useRoute();
const product = find(Number(route.params.id));
const type = product.types[Number(route.params.typeIndex)];

const quantity = ref(1);
const specials = ref([]);
const extras = ref([]);
const topins = type.topins.map(t => t.name);
const lastTopin = topins.pop();

function add() {
  cartStore.addItem({
    name: type.name,
    price: type.price,
    extras: extras.value,
    product: product.name,
    quantity: quantity.value,
    specials: specials.value,
  });
}
</script>

<template>
  <section>
    <header class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold"> {{ product.name }} </h2>
        <h3 class="text-xl font-bold">{{ type.name }}</h3>
      </div>
      <span class="text-2xl font-bold">{{ currency(type.price) }}</span>
    </header>
    <p class="text-sm text-slate-400 first-letter:capitalize">{{ topins.join(', ') }} y {{ lastTopin }}.</p>

    <h4 class="text-lg font-bold mt-4">Extras</h4>
    <div class="grid gap-4">
      <label v-for="extra in type.extras" class="flex justify-between items-center">
        <span>{{ extra.name }}</span>
        <div class="flex gap-4 items-center">
          <span class="text-sm text-slate-600">+{{ currency(extra.price) }}</span>
          <input type="checkbox" :value="extra" v-model="extras" />
        </div>
      </label>
    </div>

    <h4 class="text-lg font-bold mt-4">Especiales</h4>
    <div class="grid gap-4">
      <label v-for="special in type.specials" class="flex justify-between">
        <span>{{ special.name }}</span>
        <input type="checkbox" :value="special" v-model="specials" />
      </label>
    </div> 

    <Quantity class="mt-8" v-model="quantity" />

    <div class="flex justify-center mt-8">
      <button type="button" class="button" @click="add">Agregar al carrito</button>
    </div>
  </section>
</template>
