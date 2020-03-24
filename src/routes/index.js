import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

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
      meta: {
        auth: true,
      },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/EditPage.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// 라우터 네비게이션
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
    router.push('/login');
  } else {
    next();
  }
});
