import Vue from 'vue';
import Vuex from 'vuex';

import './firebase';

import users from './modules/users';
import auth from './modules/auth';
import todo from './modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        users,
        todo,
    }
});