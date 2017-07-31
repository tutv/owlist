<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import TodoList from './components/TodoList.vue';

    export default {
        name: 'app',
        components: {
            Navbar,
            TodoList
        }
    }
</script>
