import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state() {
    const itemsJSON = window.localStorage.getItem("cart-items");

    return {
      items: itemsJSON !== null ? JSON.parse(itemsJSON) : [],
    };
  },

  getters: {
    itemsCount() {
      return this.items.reduce((sum, item) => {
        return item.quantity + sum;
      }, 0);
    },

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
      window.localStorage.setItem("cart-items", JSON.stringify(this.items));
    },

    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
});
