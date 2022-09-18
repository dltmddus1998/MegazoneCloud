import Vue from 'vue';
import VueRouter from 'vue-router';
import SocialUsersList from '../views/SocialUsersList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: SocialUsersList,
  },
  {
    path: '/usersList',
    name: 'usersList',
    component: () => import('../views/UsersList.vue'),
  },
  {
    path: '/cacheAndCoinList',
    name: 'cacheAndCoin',
    component: () => import('../views/CacheAndCoin.vue'),
  },
  {
    path: '/serviceList',
    name: 'serviceList',
    component: () => import('../views/ServiceList.vue'),
  },
  {
    path: '/usersService',
    name: 'usersService',
    component: () => import('../views/UsersService.vue'),
  },
  {
    path: '/usersAccessHistory',
    name: 'usersAccessHistory',
    component: () => import('../views/UsersAccessHistory.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
