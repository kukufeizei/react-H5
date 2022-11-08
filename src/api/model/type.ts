export interface GetAccessTokenParams {
  user_id?: string;
  pwd?: string;
}
export interface RefreshTokenApiParams {
  user_id?: string;
  refresh_token?: string;
}
export interface ListParams {
  user_id?: string;
  term_id?: number;
  prev_id?: number;
  prev_score?: string;
}

export interface GetOssSystemParams {
  user_id?: string;
}

export type SelfUserInfoParams = GetOssSystemParams;

export interface QestionDetailsParams {
  user_id?: string;
  timeline_id?: string;
  prev_id?: number;
  prev_score?: string;
}
export interface CommentParams {
  user_id?: string;
  comment_id?: string;
  prev_id?: number;
  prev_score?: string;
}
export interface NotificationParams {
  user_id: string;
}

export interface UserListParams {
  /**
   *
   * 是否已登录，如果是首页的个人中心，需要通过这个字段来判断当前是否是已登录状态，如果logged为true，说明已登录，返回真实的数据列表，如果logged为false，说明未登录，始终返回空列表。如果是查看其他用户的个人主页，则这个字段始终传true
   */
  logged?: boolean;
  prev_id?: number;
  prev_score?: string;
  /**
   *
   * 当前个人主页的用户ID，如果是首页的个人中心，那么timeline_user_id就是指自己，其值与user_id相同；如果是查看他人的个人主页，timeline_user_id是其他用户的user_id
   */
  timeline_user_id?: string;
  /**
   * 自己的用户ID，自己的user_id
   */
  user_id?: number;
  comment_user_id?: string;
}
