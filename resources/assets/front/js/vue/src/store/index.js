import Vue from 'vue';
import Vuex from 'vuex';
import rootActions from './rootActions';
import rootGetters from './rootGetters';
import coursesModule from './courses';
import locationsModule from './locations';
import currentUserModule from './currentUser';
import vehiclesModule from './vehicles';
import jobsModule from './jobs';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: rootActions,
  getters: rootGetters,
  modules: {
    courses: coursesModule,
    locations: locationsModule,
      currentUser: currentUserModule,
      vehicles: vehiclesModule,
      jobs: jobsModule,
  },
});
