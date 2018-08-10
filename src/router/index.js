import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/dashboard/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      name:'home',
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/register',
      component: Register,
      name:'register',
      meta: {
        title: 'Register',
      },
    },
    {
      path: '/login',
      component: Login,
      name:'login',
      meta: {
        title: 'Login',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
