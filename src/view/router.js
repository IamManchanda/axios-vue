import Vue from 'vue';
import Router from 'vue-router';
import PageWelcome from './pages/welcome/index.vue';
import PageSignUp from './pages/sign-up/index.vue';
import PageSignIn from './pages/sign-in/index.vue';
import PageDashboard from './pages/dashboard/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageWelcome',
      component: PageWelcome,
    },
    {
      path: '/signup',
      name: 'PageSignUp',
      component: PageSignUp,
    },
    {
      path: '/signin',
      name: 'PageSignIn',
      component: PageSignIn,
    },
    {
      path: '/dashboard',
      name: 'PageDashboard',
      component: PageDashboard,
    },
  ],
});
