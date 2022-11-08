/* eslint-disable react-hooks/exhaustive-deps */

import { memo, FC, useEffect, useState } from 'react';
import { Avatar, Grid, Button, Space } from 'antd-mobile';
import { UserContactOutline, SetOutline } from 'antd-mobile-icons'
import { useParams } from 'react-router-dom'

import styles from './index.module.less';
import UserTabs from '@/components/BasicTabs/userTabs';
import avatar from '@/assets/images/avatar.png';
import Nav from '@/components/NavBar'
import { getSelfUserInfo } from '@/api/route'
import type { TabsItemType } from '@/components/BasicTabs/type'
import type { UserType } from './type'

const Mine: FC = () => {
  const params = useParams()
  const [userInfo, setUserInfo] = useState<UserType>({})
  const tabsItem: TabsItemType[] = [
    {
      title: '问题',
      count: 0,
      key: 'mine_question'
    },
    {
      title: '回复',
      count: 0,
      key: 'mine_reply'
    }
  ]
  const getUserInfo = async () => {
    const data = await getSelfUserInfo({ user_id: params.s_user_id as string })
    setUserInfo(data.result.user.info)
  }
  useEffect(() => {
    getUserInfo()

  }, [])

  return (
    <div className={styles.mine}>
      <Nav title={'个人主页'} type='commit' />
      <div className={styles.pd15}>
        <div className='flex justify-start'>
          <Avatar src={avatar} style={{ '--size': '75px' }} />
          <div className={styles._header}>
            <div className={styles._name}>User80123911</div>
            <div className={styles._number}>
              <UserContactOutline fontSize={18} />
              <span className={styles._ml10px}>账号:User80123911</span>
            </div>
          </div>
        </div>
        <div className={styles.operate}>
          <Grid columns={6} >
            <Grid.Item span={3}>
              <div className={`flex justify-start  ${styles.operate_count}`}>
                <div>
                  <span>0</span>
                  <span>关注</span>
                </div>
                <div>
                  <span>{userInfo.followed_count}</span>
                  <span>粉丝</span>
                </div>
                <div>
                  <span>{userInfo.like_count}</span>
                  <span>获赞</span>
                </div>
              </div>
            </Grid.Item>
            <Grid.Item span={3}>
              <div className='flex justify-end'>
                <Button size='small' className={styles.btn_edit}>
                  编辑资料
                </Button>
                <Button color='primary' size='small' className={`${styles.btn_edit}`} style={{ marginLeft: '20px', backgroundColor: '#4093FD' }}>
                  <Space>
                    <SetOutline />
                    <span>设置</span>
                  </Space>
                </Button>
              </div>
            </Grid.Item>
          </Grid>
          <div className={styles.user_sign}>
            <span>签名:</span>
            <span style={{ marginLeft: '5px' }}>暂无个性签名哦</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'hidden' }}>
        <UserTabs tabsItem={tabsItem} tabsColor='#fff' s_user_id={params.s_user_id} />
      </div>
    </div>
  );
};
export default memo(Mine);
