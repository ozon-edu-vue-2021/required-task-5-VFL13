import VueRouter from "vue-router";
import store from "@/plugins/store";

const routes = [
  {
    path: "/",
    name: "market",
    component: () => import("@/pages/Market/Market"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/pages/Cart/Cart"),
    beforeEnter: (to, from, next) => {
      store.getters["market/productCount"] ? next() : next("/");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
