import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/index';
// import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username: '',
    token: '',
  },
  getters: {
    isLogin: state => {
      return state.username != '';
    },
  },
  mutations: {
    setUserName(state, username) {
      state.username = username;
    },
    clearUserName(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, payload) {
      const { data } = await loginUser(payload);
      commit('setToken', data.token);
      commit('setUserName', data.user.username);
      // saveUserToCookie(data.user.username);
      // saveAuthToCookie(data.token);
    },
  },
});
