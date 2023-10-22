import {createRouter, createWebHistory} from 'vue-router'

//引入路由组件
import Home from "@/views/Home/index.vue";
import Search from "@/views/Search/index.vue";
import Login from "@/views/Login/index.vue";
import Register from "@/views/Register/index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //重定向
        {path: "/", redirect: "/home"},
        {path: "/home", component: Home},
        {path: "/search", component: Search},
        {path: "/login", component: Login},
        {path: "/register", component: Register},
    ]
})

export default router

