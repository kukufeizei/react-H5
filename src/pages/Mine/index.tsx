/* eslint-disable react-hooks/exhaustive-deps */

import { memo, FC } from 'react';
import { Avatar, Grid, Button, Space } from 'antd-mobile';
import { UserContactOutline, SetOutline } from 'antd-mobile-icons'
import styles from './index.module.less';
import BasicTabs from '@/components/BasicTabs';
import type { TabsItemType } from '@/components/BasicTabs/type'
const img = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.lizhi123.net%2F%3Ftag%3Da%26url%3Dmmbizz-zqpicz-zcn%2Fmmbiz_jpg%2FutK2icX3iaTygdv9hUQiaLqM5cCPgbXBTsTg1icv0y82uqib8swBHrx7ZUEo8STMjQIsAQXrjrpc9OIZHxtIljZ5ecA%2F640%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fimg.lizhi123.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666856219&t=12d6f545f90140f961bfccfd4bb81687'



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
            <span style={{ marginLeft: '5px' }}>东汉末年分三国</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <BasicTabs tabsItem={tabsItem} />
      </div>
    </div>
  );
};
export default memo(Mine);
