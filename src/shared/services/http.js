import Vue from 'nativescript-vue'
import Axios from 'axios'
import store from '../../store/index'
import Toaster from 'nativescript-toast'
import { LoadingIndicator } from "nativescript-loading-indicator"
import router from './../../router'

// loading indicator config
const loader = new LoadingIndicator();
const loaderOptions = {
  message: 'Loading...',
  android: {
    indeterminate: true,
    cancelable: true,
  }
}

// router that don't need authenctication
let publicRoutes = ['login', 'register'];

let baseURL = 'https://jolly-ape-73.localtunnel.me';
const axios = Axios.create({
  baseURL: `${baseURL}/api/`
});

// request start
axios.interceptors.request.use(config => {
  config.headers.Authorization = store.getters.authToken;

  if (publicRoutes.indexOf(config.url) && !store.getters.isLogged) {
    Toaster.makeText("You are not logged in").show();
    router.push('login');
  } else {
    loader.show(loaderOptions);
  }

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


