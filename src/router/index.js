import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import CartView from "@/views/CartView.vue";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MenuView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/product/:id/:typeIndex",
      name: "product",
      component: ProductView,
    },
  ],
});

export default router;
