import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const Layout = () => import(/* webpackChunkName: "layout" */ '@/views/layout')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/home')
const Articles = () => import(/* webpackChunkName: "articles" */ '@/views/articles')
const Catalog = () => import(/* webpackChunkName: "catalog" */ '@/views/catalog')
const About = () => import(/* webpackChunkName: "about" */ '@/views/about')
const CreateArticle = () => import(/* webpackChunkName: "create-article" */ '@/views/articles/CreateArticle.vue')
const Signup = () => import(/* webpackChunkName: "signup" */ '@/views/user/Signup.vue')
const Login = () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')


export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "",
            name: "layout",
            component: Layout,
            redirect: 'home',
            children: [
                {path: "home", name: "home", component: Home},
                {path: "articles", name: "articles", component: Articles},
                {path: "catalog", name: "catalog", component: Catalog},
                {path: "about", name: "about", component: About},
            ]
        },

        {path: "create", name: "create", component: CreateArticle},

        {path: "signup", name: "signup", component: Signup},
        {path: "login", name: "login", component: Login},
    ]
});
