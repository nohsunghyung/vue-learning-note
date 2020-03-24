import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/EditPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   if (to.path == '/main') {
//     if (store.getters.isLogin) {
//       next();
//     } else {
//       alert('로그인이 필요합니다.');
//       router.push('/login');
//     }
//   } else {
//     next();
//   }
// });
