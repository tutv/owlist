import firebaseApp from '../firebase';

const db = firebaseApp.database();

const state = {
    todos: {}
};

const mutations = {
    'ADD_TODO'(state, todo) {
        db.ref('todos').push(todo);
    },
    'UPDATE_TODO'(state, todo) {

    },
    'SET_TODO_LIST'(state, todos) {
        state.todos = todos;
    }
};

const actions = {
    addTodo({commit}, todo) {
        commit('ADD_TODO', todo);
    },
    updateTodo({commit}, todo) {
        const id = todo.id;
        delete todo.id;

        db.ref('todos/' + id).update(todo);
    },
    removeTodo({commit}, id) {
        db.ref('todos/' + id).remove();
    },
    fetchTodoList({commit}) {
        db.ref('todos').on('value', function (snap) {
            const todos = [];

            snap.forEach((item) => {
                let todo = item.val();
                todo.id = item.key;

                todos.push(todo);
            });

            commit('SET_TODO_LIST', todos);
        });
    },
};

const getters = {
    todos(state) {
        return state.todos;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}