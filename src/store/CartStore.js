import { defineStore } from "pinia";

const STORE_NAME = "cart-items";

function persist(state) {
  window.localStorage.setItem(STORE_NAME, JSON.stringify(state.items));
}

export const useCartStore = defineStore("CartStore", {
  state() {
    const itemsJSON = window.localStorage.getItem(STORE_NAME);

    return {
      items: itemsJSON !== null ? JSON.parse(itemsJSON) : [],
    };
  },

  getters: {
    /**
     * Returns the total number of items.
     */
    itemsCount() {
      return this.items.reduce((sum, item) => {
        return item.quantity + sum;
      }, 0);
    },

    /**
     * Returns and object that groups all the items by product.
     */
    productsGroups() {
      const productsGroups = {};

      this.items.forEach((item, index) => {
        productsGroups[item.product] || (productsGroups[item.product] = []);
        productsGroups[item.product].push({ ...item, index });
      });

      return productsGroups;
    },
  },

  actions: {
    addItem(item) {
      this.items.push(item);
      persist(this);
    },

    removeItem(index) {
      this.items.splice(index, 1);
      persist(this);
    },
  },
});
