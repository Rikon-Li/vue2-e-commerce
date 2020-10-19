import axios from "axios";
import { HOST } from "./api";

class Http {
  constructor() {}
  request(url, method, query) {
    // 处理参数
    let params = null;
    let data = null;
    if (method === "GET") {
      params = query;
    } else {
      data = query;
    }
    // 创建请求
    const instance = axios.create();
    // 添加拦截
    this.addInterceptors(instance);
    // 发送请求
    return instance.request({
      // baseURL: HOST,
      url,
      method,
      data,
      params,
    });
  }
  get(url, query) {
    return this.request(url, "GET", query);
  }
  post(url, query) {
    return this.request(url, "POST", query);
  }
  // 拦截器
  addInterceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // 添加token
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截器
    instance.interceptors.response.use(
      (data) => {
        // 处理失败
        if (data.data.code === 0) {
          // 成功
          return data.data.data;
        } else {
          return Promise.reject(new Error(data.data.message));
        }
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截器
    instance.interceptors.response.use(
      (data) => {
        return data;
      },
      (error) => {
        // 统一处理错误
        alert(error.message);
        return Promise.reject(error);
      }
    );
  }
}

export default new Http();
