import axios from "axios";
import {store} from "../store";
export const Axios = axios.create({
  baseURL: "http://13.215.148.86:8999/", //测试服务器
  // timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
Axios.interceptors.request.use((config) => {
    config.headers['token'] = store.state.token;
    return config;
});
Axios.interceptors.response.use(
  (res) => {
      return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default Axios;
