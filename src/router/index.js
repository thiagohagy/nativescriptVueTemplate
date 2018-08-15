import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/auth/Login';

//lazy oading
const Home = resolve => {
  require.ensure(['../components/dashboard/Home'], ()=> {
    resolve(require('../components/dashboard/Home'));
  });
};

const Register = resolve => {
  require.ensure(['../components/auth/Register'], () => {
    resolve(require('../components/auth/Register'));
  });
};

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

router.replace('/login');

module.exports = router;
