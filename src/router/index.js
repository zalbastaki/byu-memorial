import Vue from 'vue';
import VueRouter from 'vue-router';

import parseMD from 'parse-md';

import Home from '../views/Home.vue';
import Soldier from '../views/Soldier.vue';
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter);

import Soldiers from '../content/soldiers.md';
const soldiers = parseMD(Soldiers).metadata;

const soldierRoutes = soldiers.soldiers.map(soldier => {
    const kebabCaseName = soldier.name.replace(/\s+/g, '-').toLowerCase();
    return {
        path: `/${kebabCaseName}`,
        name: soldier.name,
        component: Soldier,
    };
});

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    ...soldierRoutes,
    {
        path: '/*',
        name: 'page-not-found',
        component: PageNotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
