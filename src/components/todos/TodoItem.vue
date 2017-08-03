<template>
    <div class="todo-item" :class="{done: isDone}">
        <input type="checkbox" class="checkbox" :checked="isDone" @change="onCheck">
        <span class="title">{{todo.title}}</span>
        <span class="remove" @click="remove">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
    </div>
</template>

<style scoped>
    .remove {
        cursor: pointer;
        color: #f44336;
    }
</style>

<script>
    export default {
        name: 'todo-item',
        props: ['todo'],
        data() {
            return {}
        },
        computed: {
            isDone() {
                return this.todo.done || false;
            }
        },
        methods: {
            onCheck(e) {
                this.todo.done = e.target.checked;
                this.$store.dispatch('updateTodo', this.todo);
            },
            remove() {
                this.$store.dispatch('removeTodo', this.todo.id);
            }
        }
    }
</script>