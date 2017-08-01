<template>
    <div class="to-do-list">
        <todo-item></todo-item>

        {{user}}
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';

    export default {
        name: 'todo-lists',
        components: {
            TodoItem
        },
        computed: {
            user() {
                this.$store.dispatch('login', false);

                return this.$store.isAuthenticated;
            }
        },
        created: function () {
        }
    }
</script>

<style>

</style>