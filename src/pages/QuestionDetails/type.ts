export interface ReplyListType {
  s_user_id?: string;

  /**
   * 回复语音列表，数量为0或者1
   */
  audio_list: DatumAudioList[];
  /**
   * 二级回复数量，如果top_level=false，即本身为二级回复，则comment_count=0
   */
  comment_count: number;
  /**
   * 回复ID
   */
  comment_id: number;
  /**
   * 回复者的词条等级
   */
  cur_level?: number;
  /**
   * 是否能删除此回复，当前用户是否具备删除此回复的权限
   */
  delete_enabled?: boolean;
  /**
   * 回复是否已删除
   */
  deleted?: boolean;
  /**
   * 回复者的头像URL
   */
  face_url: string;
  /**
   * 是否关注了回复者，当前用户是否关注了回复者
   */
  following?: boolean;
  /**
   * 回复图片列表，数量为0~3
   */
  image_list: DatumImageList[];
  /**
   * 回复获得的赞数
   */
  like_count: number;
  /**
   * 是否点赞了此回复，当前用户是否点赞了此回复
   */
  liked: boolean;
  /**
   * 是否能禁言回复者，当前用户是否具备禁言回复者的权限
   */
  mute_enabled?: boolean;
  /**
   * 回复者的昵称
   */
  nickname: string;
  /**
   * 是否能设置为优质回复，当前用户是否具备设置此问题为优质回复的权限
   */
  recommend_enabled?: boolean;
  /**
   * 是否是优质回复
   */
  recommended?: boolean;
  /**
   *
   * 指向回复的回复ID，如果top_levl=true，即本身是一级回复，则ref_comment_id=-1；否则top_level=false，即本身是二级回复，则分两种情况：（1）直接对所属一级回复进行回复，则ref_comment_id=top_comment_id；（2）对所属一级回复下的其他二级回复进行回复，则ref_comment_id=另一个二级回复的comment_id
   */
  ref_comment_id?: number;
  /**
   *
   * 指向回复的回复者昵称，如果top_levl=true，即本身是一级回复，则ref_nickname=""；否则top_level=false，即本身是二级回复，则分两种情况：（1）直接对所属一级回复进行回复，则ref_nickname为一级回复的回复者昵称；（2）对所属一级回复下的其他二级回复进行回复，则ref_nickname为另一个二级回复的回复者昵称
   */
  ref_nickname?: string;
  /**
   *
   * 指向回复的回复者用户ID，如果top_levl=true，即本身是一级回复，则ref_user_id=-1；否则top_level=false，即本身是二级回复，则分两种情况：（1）直接对所属一级回复进行回复，则ref_user_id=top_user_id；（2）对所属一级回复下的其他二级回复进行回复，则ref_user_id=另一个二级回复的user_id
   */
  ref_user_id?: number;
  /**
   * 回复者的词条身份属性，role=1，回复者为词条词主；role=2，回复者为词条管理员；role=其他，回复者为普通用户身份
   */
  role?: number;
  /**
   * 回复者的词条身份名称，role=1时，role_name="词主；role=2时，role_name="管理员"；role=其他时，role_name=""
   */
  role_name?: string;
  /**
   * 二级回复列表，最多返回5条
   */
  secondary_comment_list: reply[];
  /**
   * 回复时间
   */
  send_time: string;
  /**
   *
   * 上级内容是否已删除，对于top_level=true，即一级回复来说，superior_deleted表示所属问题是否已删除；对于top_level=false，即二级回复来说，superior_deleted表示所属一级回复是否已删除
   */
  superior_deleted?: boolean;
  /**
   *
   * 上级内容描述，对于top_level=true，即一级回复来说，superior_info表示所属问题的描述；对于top_level=false，即二级回复来说，superior_info表示所属一级回复的描述
   */
  superior_info?: string;
  /**
   * 回复所属词条ID
   */
  term_id: number;
  /**
   * 回复所属词条名称
   */
  term_name: string;
  /**
   * 回复正文，可为空
   */
  text: string;
  /**
   * 回复所属问题ID
   */
  timeline_id: number;
  /**
   * 回复所属问题的提问者用户ID
   */
  timeline_user_id?: number;
  /**
   * 所属一级回复的回复ID，如果top_levl=true，即本身是一级回复，则top_comment_id=-1
   */
  top_comment_id: number;
  /**
   * 是否是一级回复，True表示一级回复；False表示二级回复
   */
  top_level: boolean;
  /**
   * 所属一级回复的回复者用户ID，如果top_level为true，即本身是一级回复，则top_user_id=-1
   */
  top_user_id?: number;
  /**
   * 回复者的用户ID
   */
  user_id: number;
}

export interface DatumAudioList {
  /**
   * 语音时长，单位秒。不超过60
   */
  duration: number;
  /**
   * 语音URL
   */
  url: string;
}

export interface DatumImageList {
  /**
   * 图片实际高度
   */
  height: number;
  /**
   * 图片URL
   */
  url: string;
  /**
   * 图片实际宽度
   */
  width: number;
}

/**
 * 回复
 */
export interface reply {
  /**
   * 回复语音列表，数量为0或者1
   */
  audio_list: SecondaryCommentListAudioList[];
  /**
   * 二级回复数量，如果top_level=false，即本身为二级回复，则comment_count=0
   */
  comment_count: number;
  /**
   * 回复ID
   */
  comment_id: number;
  /**
   * 回复者的词条等级
   */
  cur_level?: number;
  /**
   * 是否能删除此回复，当前用户是否具备删除此回复的权限
   */
  delete_enabled?: boolean;
  /**
   * 回复是否已删除
   */
  deleted?: boolean;
  /**
   * 回复者的头像URL
   */
  face_url: string;
  /**
   * 是否关注了回复者，当前用户是否关注了回复者
   */
  following?: boolean;
  /**
   * 回复图片列表，数量为0~3
   */
  image_list: SecondaryCommentListImageList[];
  /**
   * 回复获得的赞数
   */
  like_count: number;
  /**
   * 是否点赞了此回复，当前用户是否点赞了此回复
   */
  liked: boolean;
  /**
   * 是否能禁言回复者，当前用户是否具备禁言回复者的权限
   */
  mute_enabled?: boolean;
  /**
   * 回复者的昵称
   */
  nickname: string;
  /**
   * 是否能设置为优质回复，当前用户是否具备设置此问题为优质回复的权限
   */
  recommend_enabled?: boolean;
  /**
   * 是否是优质回复
   */
  recommended?: boolean;
  /**
   *
   * 指向回复的回复ID，如果top_levl=true，即本身是一级回复，则ref_comment_id=-1；否则top_level=false，即本身是二级回复，则分两种情况：（1）直接对所属一级回复进行回复，则ref_comment_id=top_comment_id；（2）对所属一级回复下的其他二级回复进行回复，则ref_comment_id=另一个二级回复的comment_id
   */
  ref_comment_id?: number;
  /**
   *
   * 指向回复的回复者昵称，如果top_levl=true，即本身是一级回复，则ref_nickname=""；否则top_level=false，即本身是二级回复，则分两种情况：（1）直接对所属一级回复进行回复，则ref_nickname为一级回复的回复者昵称；（2）对所属一级回复下的其他二级回复进行回复，则ref_nickname为另一个二级回复的回复者昵称
   */
  ref_nickname?: string;
  /**
   *
   * 指向回复的回复者用户ID，如果top_levl=true，即本身是一级回复，则ref_user_id=-1；否则top_level=false，即本身是二级回复，则分两种情况：（1）直接对所属一级回复进行回复，则ref_user_id=top_user_id；（2）对所属一级回复下的其他二级回复进行回复，则ref_user_id=另一个二级回复的user_id
   */
  ref_user_id?: number;
  /**
   * 回复者的词条身份属性，role=1，回复者为词条词主；role=2，回复者为词条管理员；role=其他，回复者为普通用户身份
   */
  role?: number;
  /**
   * 回复者的词条身份名称，role=1时，role_name="词主；role=2时，role_name="管理员"；role=其他时，role_name=""
   */
  role_name?: string;
  /**
   * 回复时间
   */
  send_time: string;
  /**
   *
   * 上级内容是否已删除，对于top_level=true，即一级回复来说，superior_deleted表示所属问题是否已删除；对于top_level=false，即二级回复来说，superior_deleted表示所属一级回复是否已删除
   */
  superior_deleted?: boolean;
  /**
   *
   * 上级内容描述，对于top_level=true，即一级回复来说，superior_info表示所属问题的描述；对于top_level=false，即二级回复来说，superior_info表示所属一级回复的描述
   */
  superior_info?: string;
  /**
   * 回复所属词条ID
   */
  term_id: number;
  /**
   * 回复所属词条名称
   */
  term_name: string;
  /**
   * 回复正文，可为空
   */
  text: string;
  /**
   * 回复所属问题ID
   */
  timeline_id: number;
  /**
   * 回复所属问题的提问者用户ID
   */
  timeline_user_id?: number;
  /**
   * 所属一级回复的回复ID，如果top_levl=true，即本身是一级回复，则top_comment_id=-1
   */
  top_comment_id: number;
  /**
   * 是否是一级回复，True表示一级回复；False表示二级回复
   */
  top_level: boolean;
  /**
   * 所属一级回复的回复者用户ID，如果top_level为true，即本身是一级回复，则top_user_id=-1
   */
  top_user_id?: number;
  /**
   * 回复者的用户ID
   */
  user_id: number;
}

export interface SecondaryCommentListAudioList {
  /**
   * 语音时长，单位秒。不超过60
   */
  duration: number;
  /**
   * 语音URL
   */
  url: string;
}

export interface SecondaryCommentListImageList {
  /**
   * 图片实际高度
   */
  height: number;
  /**
   * 图片URL
   */
  url: string;
  /**
   * 图片实际宽度
   */
  width: number;
}

/**
 * 问题
 */
export interface QuestionDataType {
  /**
   * 解决精度问题
   */
  s_user_id: string;
  browse_count: number;
  /**
   * 是否能收藏此问题，当前用户是否具备收藏此问题的权限
   */
  collect_enabled?: boolean;
  /**
   * 是否已收藏此问题，当前用户是否收藏了此问题
   */
  collected?: boolean;
  /**
   * 问题下的回复总数，一级回复数+二级回复数
   */
  comment_count: number;
  /**
   * 提问者的词条等级
   */
  cur_level?: number;
  /**
   * 是否能删除此问题，当前用户是否具备删除此问题的权限
   */
  delete_enabled?: boolean;
  /**
   * 问题是否已删除
   */
  deleted?: boolean;
  /**
   * 提问者的头像URL
   */
  face_url: string;
  /**
   * 是否关注了提问者，当前用户是否关注了提问者
   */
  following?: boolean;
  /**
   * 问题图片列表，数量为0~3
   */
  image_list: imgList[];
  /**
   * 问题获得的赞数
   */
  like_count: number;
  /**
   * 是否点赞问题，当前用户是否点赞过此问题
   */
  liked: boolean;
  /**
   * 是否能禁言提问者，当前用户是否具备禁言此问题的提问者的权限
   */
  mute_enabled?: boolean;
  /**
   * 提问者的昵称
   */
  nickname: string;
  /**
   * 问题发布时间
   */
  publish_time: string;
  /**
   * 是否能设置此问题为好问题，当前用户是否具备设置此问题为好问题的权限
   */
  recommend_enabled?: boolean;
  /**
   * 问题是否是好问题
   */
  recommended?: boolean;
  /**
   * 提问者的词条身份属性，role=1，提问者为词条词主；role=2，提问者为词条管理员；role=其他，提问者为普通用户身份
   */
  role?: number;
  /**
   * 提问者的词条身份名称，role=1时，role_name="词主；role=2时，role_name="管理员"；role=其他时，role_name=""
   */
  role_name?: string;
  /**
   * 问题所属词条ID
   */
  term_id: number;
  /**
   * 问题所属词条名称
   */
  term_name: string;
  /**
   * 问题正文，不能为空
   */
  text: string;
  /**
   * 问题ID
   */
  timeline_id: number;
  /**
   * 问题标题，不能为空
   */
  title: string;
  /**
   * 提问者的用户ID
   */
  user_id: number;
}

export interface imgList {
  /**
   * 图片实际高度
   */
  height: number;
  /**
   * 图片URL
   */
  url: string;
  /**
   * 图片实际宽度
   */
  width: number;
}
