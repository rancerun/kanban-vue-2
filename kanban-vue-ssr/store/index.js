import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';

Vue.use(Vuex);

import { fetchItem } from '../api';

export function createStore() {
  return new Vuex.store({
    state: () => ({
      kanban: JSON.parse(window.localStorage.getItem('kanban'))
    }),
    mutations
  });
}