
import { memo, useRef } from 'react';
import Nav from '@/components/NavBar'
import { Divider, Grid, Avatar, Image } from 'antd-mobile'
import { LikeOutline } from 'antd-mobile-icons'
import styles from './index.module.less'
import MultiImageViewer from '@/components/MultiImageViewer';

const defaultimg = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',
]

const Details = () => {
  const childRef = useRef<any>(null)
  return (
    <div className={styles.details}>
      <Nav />
      <div className={styles.pd}>
        <Divider />
        <p className={styles.title}>请问大佬</p>
        <div className={styles.ma}>
          <Grid columns={10} >
            <Grid.Item span={6}>
              <div className='flex justify-start'>
                <div className={styles.maright}><Avatar src={defaultimg} style={{ '--size': '40px', '--border-radius': '40px' }} /></div>
                <div>
                  <p className={styles.mt}>小姨</p>
                  <p className={styles.desc}>发布于20小时前 · 12次阅读</p>
                </div>
              </div>
            </Grid.Item>
            <Grid.Item span={4}>
              <div className={`${styles.btnbox}`}>
                <div>关注</div>
              </div>
            </Grid.Item>
          </Grid>
        </div>
        <div className={styles.qe_detail}>
          第九题,B有疑问,为什么不选B呢
        </div>
        <div className={styles.mt20} onClick={() => { childRef.current!.set(true); }} >
          <Image src={demoImages[0]} className={styles.imgs} fit='cover' />
          <MultiImageViewer list={demoImages} ref={childRef} />
          <Divider />
        </div>
        <div className={styles.reply}>
          <p className={styles.title2}>全部回复</p>
          {/* 回复区域 */}
          <div>
            <div className={styles.ma}>
              <Grid columns={10} >
                <Grid.Item span={6}>
                  <div className='flex justify-start'>
                    <div className={styles.maright}><Avatar src={demoImages[3]} style={{ '--size': '40px', '--border-radius': '40px' }} /></div>
                    <div>
                      <p className={styles.mt}>哈哈哈</p>
                      <p className={styles.desc}>16小时前</p>
                    </div>
                  </div>
                </Grid.Item>
                <Grid.Item span={4}>
                  <div className={`${styles.btnbox}`}>
                    <span>
                      <LikeOutline fontSize={20} />0
                    </span>
                  </div>
                </Grid.Item>
              </Grid>
            </div>
            <div className={styles.reply_details}>
              <p>因为这道题你接错了知道吧</p>
              <div className={styles.reply_people}>
                <div className={styles.fsz}>
                  <span className={styles.name}>效益:</span>
                  <span>D一定是连续的吗?</span>
                </div>
                <div className={styles.fsz}>
                  <span className={styles.name}>xjs:</span>
                  回复
                  <span className={styles.name}>效益</span>
                  <span>D一定是连续的吗?</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.ma}>
              <Grid columns={10} >
                <Grid.Item span={6}>
                  <div className='flex justify-start'>
                    <div className={styles.maright}><Avatar src={demoImages[3]} style={{ '--size': '40px', '--border-radius': '40px' }} /></div>
                    <div>
                      <p className={styles.mt}>哈哈哈</p>
                      <p className={styles.desc}>16小时前</p>
                    </div>
                  </div>
                </Grid.Item>
                <Grid.Item span={4}>
                  <div className={`${styles.btnbox}`}>
                    <span>
                      <LikeOutline fontSize={20} />0
                    </span>
                  </div>
                </Grid.Item>
              </Grid>
            </div>
            <div className={styles.reply_details}>
              <p>因为这道题你接错了知道吧</p>
              <div className={styles.reply_people}>
                <div className={styles.fsz}>
                  <span className={styles.name}>效益:</span>
                  <span>D一定是连续的吗?</span>
                </div>
                <div className={styles.fsz}>
                  <span className={styles.name}>xjs:</span>
                  回复
                  <span className={styles.name}>效益</span>
                  <span>D一定是连续的吗?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Details);
