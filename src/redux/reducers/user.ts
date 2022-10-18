import { SET_USERINFO } from '../constants';

const defaultUserInfo = {};

const user = (state = defaultUserInfo, action: any) => {
  switch (action?.type) {
    case SET_USERINFO:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};
export default user;
