import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/localStorage';
import { removeCachedUrl } from '../utils/localStorage';
import { STATUS_CODE } from '../constants/common';
import PATH from '../constants/clientPath';
import history from '../utils/history';
import API_HOST from '../constants/apiHosts';

const mainRequestConfig = {
  baseURL: API_HOST.BASE_URL,
};
const BaseService = axios.create(mainRequestConfig);
const BaseServiceGet = axios.create(mainRequestConfig);

BaseService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

BaseServiceGet.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

BaseService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
      localStorage.removeItem(ACCESS_TOKEN);
      removeCachedUrl();
      history.replace(PATH.ROOT);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

BaseServiceGet.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
      localStorage.removeItem(ACCESS_TOKEN);
      removeCachedUrl();
      history.replace(PATH.ROOT);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export { BaseService, BaseServiceGet };
