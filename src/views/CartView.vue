<script setup>
import { useCartStore } from "@/store/CartStore";
import { currency, itemTotal } from '@/utils';

const cartStore = useCartStore();
const itemsTotal = cartStore.items.reduce((amount, item) => itemTotal(item) + amount, 0);

function placeOrder() {
  console.log("Place order with", cartStore.items);
}
</script>

<template>
  <div class="grid gap-8">
    <section v-for="groupName in Object.keys(cartStore.productsGroups)">
      <h2 class="text-2xl font-bold">{{ groupName }}</h2>
      <div class="grid gap-4">
        <div v-for="item in cartStore.productsGroups[groupName]">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-bold">{{ item.name }} x{{ item.quantity }}</h3>
            <div class="flex gap-4 items-center">
              <span class="text-lg font-bold">{{ currency(itemTotal(item)) }}</span>
              <button class="button" type="button" @click="cartStore.removeItem(item.index)">🗑</button>
            </div>
          </div>

          <div class="pl-4">
            <template v-if="item.extras.length > 0">
              <h4 class="text-lg mt-2">Extras</h4>
              <ul class="list-disc list-inside">
                <li v-for="extra in item.extras">{{ extra.name }}</li>
              </ul>
            </template>

            <template v-if="item.specials.length > 0">
              <h4 class="text-lg mt-2">Especiales</h4>
              <ul class="list-disc list-inside">
                <li v-for="special in item.specials">{{ special.name }}</li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>

  <h2 class="mt-8 text-center text-2xl font-bold">Total: {{ currency(itemsTotal) }}</h2>

  <div class="text-center mt-8">
    <button class="button" type="button" @click="placeOrder">Hacer Pedido</button>
  </div>
</template>
