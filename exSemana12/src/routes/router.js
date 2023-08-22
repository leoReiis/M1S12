import { createRouter, createWebHashHistory } from "vue-router";
import TheHome from "../views/home/TheHome.vue"

export const routes = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      component: TheHome,
      name: "Home",
    },
  ],
});
