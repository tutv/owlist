import Vue from 'vue';
import Vuex from 'vuex';

import './firebase';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        value: 0
    },
    modules: {
        users
    },
    actions,
    getters,
    mutations
});