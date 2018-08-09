import Vue from 'nativescript-vue'
import Axios from 'axios'
import store from '../store/index'

function getToken() {
  return store.getters.authToken;
}

const axios = Axios.create({
  baseURL: 'https://dangerous-rabbit-17.localtunnel.me/api/'
})

// Intercept the request to make sure the token is injected into the header.
// request start
axios.interceptors.request.use(config => {
  config.headers.Authorization = getToken();
  return config;
})

// request end
axios.interceptors.response.use(response => {
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


