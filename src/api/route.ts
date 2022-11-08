import request from './request';

import type {
  GetAccessTokenParams,
  RefreshTokenApiParams,
  ListParams,
  GetOssSystemParams,
  SelfUserInfoParams,
  QestionDetailsParams,
  CommentParams,
  NotificationParams,
  UserListParams,
} from './model/type';

/* 获取token */
export const getTokenApi = (params?: GetAccessTokenParams) =>
  request.post('/auth/get_access_token', params);

/* 用户个人信息 */
export const getSelfUserInfo = (params?: SelfUserInfoParams) =>
  request.post('/user/refresh_self_info', params);

/* 获取OSS配置参数 */
export const getOssSystem = (params?: GetOssSystemParams) =>
  request.post('/oss/sts', params);

/* 刷新AccessToken */
export const refreshTokenApi = (params?: RefreshTokenApiParams) =>
  request.post('/auth/refresh_token', params);

/* 获取新问题 */
export const newListApi = (params?: ListParams) =>
  request.post('/society/load_most_recent_timeline_list', params);

/* 获取好问题 */
export const goodListApi = (params?: ListParams) =>
  request.post('/society/load_recommended_timeline_list', params);

/* 获取待回复 */
export const commentedListApi = (params?: ListParams) =>
  request.post('/society/load_not_commented_timeline_list', params);

/* 获取优质回复 */
export const goodCommentListApi = (params?: ListParams) =>
  request.post('/society/load_recommended_comment_list', params);

/* 问题动态详情 */
export const questionDetailsApi = (params?: QestionDetailsParams) =>
  request.post('/society/load_timeline_detail', params);

/* 获取回复详情 */
export const commentDetailsApi = (params?: CommentParams) =>
  request.post('/society/load_comment_detail', params);

/* 获取消息列表数据 */
export const notificationApi = (params?: NotificationParams) =>
  request.post('/user/load_user_notification', params);

/* 获取用戶历史问题列表 */
export const userTimelineListApi = (params?: UserListParams) =>
  request.post('/society/load_user_timeline_list', params);

/* 获取用户收藏问题列表 */
export const userCollectedTimelineListApi = (params?: UserListParams) =>
  request.post('/society/load_collected_timeline_list', params);

/* 获取用户历史回复列表 */
export const userCommentListApi = (params?: UserListParams) =>
  request.post('/society/load_user_comment_list', params);
