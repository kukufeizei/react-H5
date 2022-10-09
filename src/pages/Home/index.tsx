
import { memo } from 'react';
// import { getList } from '@/api/route'
// import styles from './index.module.less'
import Header from '@/components/Header'
import BasicTabs from '@/components/BasicTabs';
import type { TabsItemType } from '@/components/BasicTabs/type'

const Home = () => {
  const tabsItem: TabsItemType[] = [
    {
      title: '新问题',
      count: 1,
      key: 'question'
    },
    {
      title: '好问题',
      count: 0,
      key: 'reply'
    },
    {
      title: '待回复',
      count: 4,
      key: 'star'
    }
  ]
  // getList('1231231').then(res => {

  // })



  return (
    <div>
      <Header />
      <BasicTabs tabsItem={tabsItem} tabsColor='#EEF2F3' tabsTop={40} />
    </div >
  );
};
export default memo(Home);
