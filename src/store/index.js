import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    setUserName(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    async LOGIN({ commit }, payload) {
      const { data } = await loginUser(payload);
      commit('setUserName', data.user.username);
    },
  },
});
