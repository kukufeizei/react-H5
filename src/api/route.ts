import request from './request';

import type { GetAccessTokenParams } from './model/type';

/* 获取token */
export const getToken = (params?: GetAccessTokenParams) =>
  request.post('/auth/get_access_token', params);

// /* 获取token */
// export const getList = (params?: any) => request.post('/society/load_most_recent_timeline_list', params);
