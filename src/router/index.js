import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/HelloWorld'
import Register from '../components/Register'
import Vue3Test from '../components/Vue3Test'
import Elecar from '../components/Elecar'
import Login from '../components/Login'

const routes = [
    {
        path : '/',
        name : 'home',
        component : Home
    },
    {
        path : '/register',
        name : 'register',
        component : Register
    },
    {
        path : '/vue3test',
        name : 'vue3test',
        component : Vue3Test
    },
    {
        path : '/elecar',
        name : 'elecar',
        component : Elecar
    },
    {
        path : '/login',
        name : 'login',
        component : Login,
        props: true,
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;