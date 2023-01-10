import { createWebHistory, createRouter } from "vue-router";
import logo from "./components/logo.vue";
import login from "./components/login.vue";
import award from "./components/award.vue";
import bones from "./components/award/bones.vue";
import addides from "./components/award/addides.vue";
import addidesIDcard from "./components/award/addidesIDcard.vue";
import boneslog from "./components/award/boneslog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
