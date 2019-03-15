import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import module from './module/module'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    module
  },
  plugins: [createLogger()]
})