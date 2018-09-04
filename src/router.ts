import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ './views/Product.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "checkout" */ './views/Checkout.vue'),
    },
  ],
});
