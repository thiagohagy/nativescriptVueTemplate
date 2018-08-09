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
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/register',
      component: Register,
      meta: {
        title: 'Register',
      },
    },
    {
      path: '/Login',
      component: Login,
      meta: {
        title: 'Login',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
