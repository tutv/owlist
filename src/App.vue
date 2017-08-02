<template>
    <div id="app">
        <navbar></navbar>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import TodoList from './components/todos/TodoList.vue';

    export default {
        name: 'app',
        components: {
            Navbar,
            TodoList
        }
    }
</script>
