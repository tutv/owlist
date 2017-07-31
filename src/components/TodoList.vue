<template>
    <div class="to-do-list">
        <todo-item></todo-item>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';

    export default {
        name: 'todo-lists',
        components: {
            TodoItem
        }
    }
</script>

<style>

</style>