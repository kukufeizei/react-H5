import { SET_USERINFO } from '../constants';

export function setUserInfo(user: any) {
  return {
    type: SET_USERINFO,
    user,
  };
}
