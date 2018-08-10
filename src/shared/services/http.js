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

let baseURL = 'https://hungry-parrot-96.localtunnel.me';

const axios = Axios.create({
  baseURL: `${baseURL}/api/`
});

// Intercept the request to make sure the token is injected into the header.
// request start
axios.interceptors.request.use(config => {
  config.headers.Authorization = store.getters.authToken;
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


