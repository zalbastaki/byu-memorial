import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: function() {
            return import('../views/About.vue');
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
