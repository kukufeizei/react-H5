
import { memo } from 'react';
import KeepAlive from 'react-activation'
// import styles from './index.module.less'
// import Header from '@/components/Header'
import BasicTabs from '@/components/BasicTabs';
import type { TabsItemType } from '@/components/BasicTabs/type'
import Nav from '@/components/NavBar'

const Home = () => {
  const tabsItem: TabsItemType[] = [
    {
      title: '新问题',
      count: 0,
      key: 'home_question',
    },
    {
      title: '好问题',
      count: 0,
      key: 'home_goodQuestion',
    },
    {
      title: '待回复',
      count: 0,
      key: 'home_waitReply',
    },
    {
      title: '优质回复',
      count: 0,
      key: 'home_goodReply',
    }
  ]

  return (
    <div>
      {/* <Header /> */}
      {/* <BasicTabs tabsItem={tabsItem} tabsColor='#EEF2F3' tabsTop={40} /> */}
      <Nav />
      <KeepAlive cacheKey="SOUCI_KEY">
        <BasicTabs tabsItem={tabsItem} tabsColor='#fff' tabsTop={40} />
      </KeepAlive>
    </div >
  );
};
export default memo(Home);
