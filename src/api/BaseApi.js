import axios from 'axios'
import EnvUtil from '../utils/EnvUtil.js'

const SC_1001 = 1001;
axios.defaults.timeout = 60000;
export default class BaseApi {
  static plat(baseUrl) {
    if (!baseUrl) {
      baseUrl = EnvUtil.getBaseUrl()
    }
    return BaseApi.create(baseUrl)
  }

  static create(baseUrl) {
    let instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true,
      headers: {'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json'},
    });

    instance.interceptors.request.use(function (config) {
      config.headers['trace_id'] = uuid();
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
      if (response.data instanceof ArrayBuffer) {
        return response
      }
      if (response.data.success) {
        return response
      }
    }, function (error) {
      if (error.response) {
        switch (error.response.status) {
          case SC_1001:
            error.message = '登录已过期,请重新登录!';
            break;
        }
      }
      return Promise.reject(error);
    });

    return instance;
  }
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0;
    let v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
