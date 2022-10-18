import { unstable_HistoryRouter as Router } from 'react-router-dom';
import TabBarView from '@/layout/TabBarView';
import RouteRender from '@/routers/RouteRender';
import history from '@/utils/history';

import { useEffect } from 'react';
import { getTokenApi, getOssSystem } from '@/api/route'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/redux/actions/user'
import { setAuth } from '@/utils/index';

const App = () => {
  const dispatch = useDispatch()

  // 获取oss配置
  const getUserOssSystem = async (userId: string) => {

    const res = await getOssSystem({ user_id: userId })
    res && setAuth('oss_system', JSON.stringify(res.result!))

  }

  // 启动项目存token 和refresh_token
  const getUser = async () => {

    const params = {
      user_id: "134464846161772552",
      pwd: "b5f1901be559d8752a8b265bdc6a1bab12c4d04582c87762cac46688b891fb9b"
    }

    const res = await getTokenApi(params)

    res && dispatch(setUserInfo(res.result.oauth2_token))
    setAuth('token', res.result.oauth2_token.access_token)
    setAuth('refresh_token', res.result.oauth2_token.refresh_token)
    setAuth('user_id', res.result.oauth2_token.user_id)

    getUserOssSystem(res.result.oauth2_token.user_id)
  }

  useEffect(() => {
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Router history={history}>
        <RouteRender />
        <TabBarView />
      </Router>
    </>
  );
};
export default App;
