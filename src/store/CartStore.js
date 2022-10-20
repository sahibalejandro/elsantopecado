import { defineStore } from "pinia";

import { itemTotal } from '@/utils';

const STORE_NAME = "elsantopecado-cart";
const ONE_HOUR = 60 * 60 * 1000;

function persist(state) {
  // Update the cart expiration time every time it is persisted.
  state.expires = Date.now() + ONE_HOUR;

  // Make sure the properties persisted here match the properties
  // defined in the store's state, see below.
  window.localStorage.setItem(STORE_NAME, JSON.stringify({
    items: state.items,
    expires: state.expires,
  }));
}

export const useCartStore = defineStore("CartStore", {
  state() {
    // If you add or remove properties from defaultState make sure to update
    // the persist() function so it persist the available properties.
    const defaultState = {
      items: [],
      expires: Date.now() + ONE_HOUR,
    };

    const localDataJSON = window.localStorage.getItem(STORE_NAME);
    if (localDataJSON === null) {
      return defaultState;
    }

    // If current persisted cart is expired just return the default state.
    const localData = JSON.parse(localDataJSON);
    if (localData.expires <= Date.now()) {
      return defaultState;
    }

    return localData;
  },

  getters: {
    /**
     * Returns the total number of items.
     */
    itemsCount() {
      return this.items.reduce((count, item) => item.quantity + count, 0);
    },

    total() {
      return this.items.reduce((amount, item) => amount + itemTotal(item), 0);
    },

    isEmpty() {
      return this.items.length === 0;
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
    /**
     * Add a new item to the cart and persist the state.
     */
    addItem(item) {
      this.items.push(item);
      persist(this);
    },

    /**
     * Remove an item from the cart's items list with the given index.
     * Persist the data.
     */
    removeItem(index) {
      this.items.splice(index, 1);
      persist(this);
    },
  },
});
