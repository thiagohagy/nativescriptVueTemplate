import Vue from 'nativescript-vue'
import Axios from 'axios'
import store from '../../store/index'
import { LoadingIndicator } from "nativescript-loading-indicator";

const loader = new LoadingIndicator();
const loaderOptions = {
  message: 'Loading...',
  android: {
    indeterminate: true,
    cancelable: true,
  }
}

function getToken() {
  return store.getters.authToken;
}

const axios = Axios.create({
  baseURL: 'https://spotty-dolphin-18.localtunnel.me/' + 'api'
})

// Intercept the request to make sure the token is injected into the header.
// request start
axios.interceptors.request.use(config => {
  config.headers.Authorization = getToken();
  loader.show(loaderOptions);
  return config;
})

// request end
axios.interceptors.response.use(response => {
  loader.hide();
  response = response.data;
  return response;
});

const http = {
  post: (url, data) => axios.post(url, data),
  put: (url, data) => axios.put(url, data),
  get: (url) => axios.get(url),
  delete: (url, data) => axios.delete(url, data)
};

Vue.prototype.$http = http;


