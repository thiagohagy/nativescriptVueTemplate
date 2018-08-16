import * as  applicationSettings from 'application-settings'

const state = {
  IS_LOGGED: false,
  AUTH_TOKEN: false,
};

const mutations = {
  login(state, payload) {
    console.log('make login');
    state.IS_LOGGED = true;
    state.AUTH_TOKEN = payload.token;

    if (payload.keepLogin) {
     applicationSettings.setString('login',JSON.stringify(payload));
    } else {
      applicationSettings.setString('login', '');
    }
  },
  logout() {
    state.IS_LOGGED = false;
    state.AUTH_TOKEN = false;
  },
};

const getters = {
  isLogged: () => state.IS_LOGGED,
  authToken: () => state.AUTH_TOKEN,
};

export default {
  state,
  getters,
  mutations,
};
