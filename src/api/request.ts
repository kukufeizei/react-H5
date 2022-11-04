import { Toast } from 'antd-mobile';
import axios, { AxiosRequestConfig } from 'axios';

import { getAuth, setAuth } from '@/utils/index';
import { refreshTokenApi } from '@/api/route';
import store from '@/redux/store';

axios.defaults.timeout = 1000 * 10;

interface AxiosErrorInterface {
  message: string;
  config: any;
  response: any;
}

axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: AxiosErrorInterface) => {
    return error;
  },
);

axios.interceptors.response.use(
  (response: any) => {
    if (response.status !== 200) {
      Toast.show({ icon: 'fail', content: response.data.err_msg });
      return Promise.reject(response);
    }
    return Promise.resolve(response.data);
  },
  (error: AxiosErrorInterface) => {
    if (error.response.status === 403 || error.response.status === 401) {
      // token失效 重新请求token
      // eslint-disable-next-line no-undef
      location.reload();
      const user_id = store.getState().user.user.user_id as string;
      const refresh_token = store.getState().user.user.refresh_token as string;

      refreshTokenApi({
        user_id: user_id,
        refresh_token: refresh_token,
      }).then((res) => {
        res &&
          store.dispatch({
            type: 'SET_USERINFO',
            user: res.result.oauth2_token,
          });
        setAuth('token', res.result.oauth2_token.access_token);
        setAuth('refresh_token', res.result.oauth2_token.refresh_token);
        setAuth('user_id', res.result.oauth2_token.user_id);
      });
    } else {
      Toast.show({ icon: 'fail', content: '请求失败' });
    }
    return Promise.reject(error);
  },
);

const baseRequest = (config: any): Promise<any> => {
  config = {
    ...config,
    headers: {
      Authorization: `Bearer ${getAuth('token')}`,
    },
    url: `${import.meta.env.VITE_HTTP_API}${config.url}`,
  };
  return axios.request(config);
};

export default {
  get: (url: string, params?: any, config?: AxiosRequestConfig) => {
    return baseRequest({
      method: 'get',
      params,
      url,
      ...config,
    });
  },
  post: (url: string, data: any, config?: AxiosRequestConfig) => {
    return baseRequest({
      data,
      method: 'post',
      url,
      ...config,
    });
  },
  patch: (url: string, data: any, config?: AxiosRequestConfig) => {
    return baseRequest({
      data,
      method: 'patch',
      url,
      ...config,
    });
  },
  put: (url: string, data?: any, config?: AxiosRequestConfig) => {
    return baseRequest({
      data,
      method: 'put',
      url,
      ...config,
    });
  },
  delete: (url: string, data?: any, config?: AxiosRequestConfig) => {
    return baseRequest({
      data,
      method: 'delete',
      url,
      ...config,
    });
  },
};
