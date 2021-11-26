import { createRouter, createWebHistory } from "vue-router";
import Crane from '../components/HelloWorld'
import Register from '../components/Register'
import Vue3Test from '../components/Vue3Test'
import Elecar from '../components/Elecar'
import DashBoard from '../components/Elecar'
import Home from '../components/Home'

const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/crane',
        name : 'crane',
        component : Crane
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
        path : '/main',
        name : 'main',
        component : DashBoard
    },
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;