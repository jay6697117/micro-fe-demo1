import Home from '../views/Home.vue';

const routes = [
  {
    path: '/vue',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

export default routes;
