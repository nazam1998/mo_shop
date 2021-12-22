import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import( /* webpackChunkName: "profil" */ '../views/Profil.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/myshop',
    name: 'MyShop',
    component: () => import( /* webpackChunkName: "myshop" */ '../views/MyShop.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/myorders',
    name: 'MyOrders',
    component: () => import( /* webpackChunkName: "myorders" */ '../views/MyOrders.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/order/:orderid',
    name: 'Order',
    component: () => import( /* webpackChunkName: "order", */ '../views/Order.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mycart',
    name: 'Panier',
    component: () => import( /* webpackChunkName: "mycart" */ '../views/Panier.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.auth_token) {
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next()
    }
  } else {
    next();
  }
})
export default router