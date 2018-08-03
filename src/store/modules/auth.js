const state = {
  IS_LOGGED: false,
};

const mutations = {
  login (state) {
    state.IS_LOGGED = true;
  },
  logout() {
    state.IS_LOGGED = false;
  }
};

const actions = {
  login: ({commit}) => commit('login'),
  logout: ({commit}) => commit('logout'),
};

const getters = {
  isLogged: () => state.IS_LOGGED,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
