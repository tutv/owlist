import Vue from 'vue';
import Router from 'vue-router';

import TodoList from '../components/todos/TodoList.vue';
import Settings from '../components/settings/Settings.vue';
import Login from '../components/pages/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: TodoList
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {
            path: '*',
            redirect: {
                name: 'home'
            }
        }
    ]
})
