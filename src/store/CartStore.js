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
  },

  actions: {
    addItem(item) {
      this.items.push(item);
      window.localStorage.setItem("cart-items", JSON.stringify(this.items));
    },
  },
});
