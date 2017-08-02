const getters = {
    isAuthenticated(state) {
        return state.user;
    }
};

const mutations = {};

const actions = {};

const state = {
    user: false
};

export default {
    state,
    getters,
    mutations,
    actions
}