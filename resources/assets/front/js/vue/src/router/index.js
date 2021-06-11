import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../views/Homepage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: () => import('../views/Jobs.vue'),
    },
    {
        path: '/create-job',
        name: 'CreateJob',
        component: () => import('../views/CreateJob.vue'),
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('../views/Users.vue'),
    },
    {
        path: '/vehicles',
        name: 'Vehicles',
        component: () => import('../views/Vehicles.vue'),
    },
    {
        path:'/jobs/:id',
        name: 'JobRequest',
        component: () => import('../views/JobRequest.vue')
    },
    {
        path :'*',
        component:NotFound,
    }
];

const router = new VueRouter({
    routes,
});

export default router;
