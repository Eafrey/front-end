import Router from "vue-router";
import Vue from "vue";
import Home from "@/views/home";
import Articles from "@/views/articles"
import Catalog from "@/views/catalog"
import About from "@/views/about"

import CreateArticle from "@/views/articles/CreateArticle.vue"

import Signup from "@/views/user/Signup.vue";
import Login from "@/views/user/Login.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/home", name: "home", component: Home },
    { path: "/articles", name: "articles", component: Articles },
    { path: "/catalog", name: "catalog", component: Catalog },
    { path: "/about", name: "about", component: About },

    { path: "/create", name: "create", component: CreateArticle },

    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
  ]
});
