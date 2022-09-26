/* eslint-disable react-hooks/exhaustive-deps */

import { memo, FC } from 'react';
import { Avatar, Grid, Button, Space } from 'antd-mobile';
import { UserContactOutline, SetOutline } from 'antd-mobile-icons'
import styles from './index.module.less';
import BasicTabs from '@/components/BasicTabs';
import type { TabsItemType } from '@/components/BasicTabs/type'
const img = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'



const Mine: FC = () => {
  const tabsItem: TabsItemType[] = [
    {
      title: '问题',
      count: 1,
      key: 'question'
    },
    {
      title: '回复',
      count: 0,
      key: 'reply'
    },
    {
      title: '收藏',
      count: 4,
      key: 'star'
    }
  ]

  return (
    <div className={styles.mine}>
      <div className={styles.pd15}>
        <div className='flex justify-start'>
          <Avatar src={img} style={{ '--size': '75px' }} />
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
                  <span>99</span>
                  <span>关注</span>
                </div>
                <div>
                  <span>129</span>
                  <span>粉丝</span>
                </div>
                <div>
                  <span>79</span>
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
            <span>世界和平</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <BasicTabs tabsItem={tabsItem} />
      </div>
    </div>
  );
};
export default memo(Mine);
