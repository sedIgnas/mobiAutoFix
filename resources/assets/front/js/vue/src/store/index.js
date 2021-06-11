import Vue from 'vue';
import Vuex from 'vuex';
import rootActions from './rootActions';
import rootGetters from './rootGetters';
import currentUserModule from './currentUser';
import vehiclesModule from './vehicles';
import jobsModule from './jobs';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: rootActions,
  getters: rootGetters,
  modules: {
      currentUser: currentUserModule,
      vehicles: vehiclesModule,
      jobs: jobsModule,
  },
});
