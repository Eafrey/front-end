import Router from "vue-router";
import Vue from "vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login }
  ]
});
