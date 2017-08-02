<template>
    <div class="to-do-list">
        <add-todo></add-todo>

        <template v-for="todo in todos">
            <todo-item :todo="todo"></todo-item>
        </template>

        <button class="btn" @click="login">Login</button>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';
    import AddTodo from "./add-todo.vue";

    export default {
        name: 'todo-lists',
        components: {
            AddTodo,
            TodoItem
        },
        methods: {
            login: function (e) {
                console.log(e);
            }
        },
        created: function () {
            this.$store.dispatch('fetchTodoList');
        },
        computed: {
            user() {
                return this.$store.isAuthenticated;
            },
            todos() {
                return this.$store.getters.todos;
            }
        },
        beforeRouteEnter(from, to, next) {
            next();
        }
    }
</script>

<style>

</style>