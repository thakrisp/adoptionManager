import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../pages/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'logInPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '../pages/login.vue'),
  },
  {
    path: '/animals/:id(\\d+)',
    name: 'animalPage',
    props: true,
    component: () =>
      import(/* webpackChunkName: "animal" */ '../pages/animal.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: () =>
      import(/* webpackChunkName: "animal" */ '../pages/error.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
