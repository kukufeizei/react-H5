/* eslint-disable react-hooks/exhaustive-deps */

import { memo, FC, useEffect, useState } from 'react';
import { Avatar, Grid, Button, Space, ErrorBlock } from 'antd-mobile';
import { UserContactOutline, SetOutline } from 'antd-mobile-icons'

import styles from './index.module.less';
// import BasicTabs from '@/components/BasicTabs';
import type { TabsItemType } from '@/components/BasicTabs/type'
import avatar from '@/assets/images/avatar.png';

const Mine: FC = () => {

  // const tabsItem: TabsItemType[] = [
  //   {
  //     title: '问题',
  //     count: 1,
  //     key: 'mine_question'
  //   },
  //   {
  //     title: '回复',
  //     count: 0,
  //     key: 'mine_reply'
  //   },
  //   {
  //     title: '收藏',
  //     count: 4,
  //     key: 'mine_star'
  //   }
  // ]

  return (
    <div className={styles.mine}>
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
                  <span>0</span>
                  <span>粉丝</span>
                </div>
                <div>
                  <span>0</span>
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
            <span style={{ marginLeft: '5px' }}>欢迎使用搜词O_O</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'hidden', marginTop: '80px' }}>
        {/* <BasicTabs tabsItem={tabsItem} tabsColor='#fff' /> */}
        <ErrorBlock
          image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
          style={{
            '--image-height': '150px',
          }}
          title={'暂时没有您想要的数据'}
          description={
            <span>
              下载 <a href=''>搜词APP</a>才能体验完整版哦~
            </span>
          }
        >
          <Button color='primary'>立刻下载</Button>
        </ErrorBlock>
      </div>
    </div>
  );
};
export default memo(Mine);
