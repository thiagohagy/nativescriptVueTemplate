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
  login: ({commit}) => {
    console.log('login or not to login, thats the question');
    return new Promise((resolve, reject) => {
      commit('login');
      resolve();
      // reject();
      // make request and store token, then inserto on axios the Authentication token on every request
    });

  },
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
