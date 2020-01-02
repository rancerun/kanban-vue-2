import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    kanban: JSON.parse(window.localStorage.getItem('kanban'))
  },
  mutations,
  getters
});
