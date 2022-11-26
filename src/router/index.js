import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserListView from "../views/UserListView.vue";
import UserProfileView from "../views/UserProfileView.vue";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RegisterView from "../views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/userlist",
    name: "userlist",
    component: UserListView,
  },
  {
    path: "/userprofile/:userId",
    name: "userprofile",
    component: UserProfileView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/notfoundview",
    name: "notfoundview",
    component: NotFoundView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/notfoundview",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
