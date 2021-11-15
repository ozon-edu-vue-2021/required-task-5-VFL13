import VueRouter from "vue-router";

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
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
