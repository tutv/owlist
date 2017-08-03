<template>
    <div class="to-do-list">
        <add-todo></add-todo>

        <template v-for="todo in todos">
            <todo-item :todo="todo"></todo-item>
        </template>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';
    import AddTodo from "./AddTodo.vue";

    export default {
        name: 'todo-lists',
        components: {
            AddTodo,
            TodoItem
        },
        methods: {
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