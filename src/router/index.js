import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Highscore from "../views/Highscore.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/highscore",
    name: "Highscore",
    component: Highscore,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
