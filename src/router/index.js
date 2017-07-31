import Vue from 'vue';
import Router from 'vue-router';

import TodoList from '../components/TodoList.vue';
import Settings from '../components/Settings.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: TodoList
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        }

    ]
})
