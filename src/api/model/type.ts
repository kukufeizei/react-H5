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
