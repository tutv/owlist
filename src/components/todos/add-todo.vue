<template>
    <div class="add-todo">
        <form @submit.prevent="onSubmit">
            <b-form-input v-model="title"
                          type="text"
                          placeholder="Add a to-do"
            ></b-form-input>
        </form>

    </div>
</template>

<script>
    export default {
        name: 'add-todo',
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                const todo = {
                    title: this.title
                };

                this.$store.dispatch('addTodo', todo);
                this.title = '';
            }
        }
    }
</script>
