const getters = {
    isAuthenticated(state) {
        return state.user;
    }
};

const actions = {
    login({commit}, payload) {
        commit('login', payload);
    }
};

const mutations = {
    login(state, payload) {

    }
};


export default {
    state: {
        user: {name: 'tu'},
    },
    getters,
    mutations,
    actions,
}