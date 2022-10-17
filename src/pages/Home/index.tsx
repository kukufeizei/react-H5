
import { memo } from 'react';
import { getToken } from '@/api/route'
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


  // useRequest
  const params = {
    user_id: "134464846161772552",
    pwd: "b5f1901be559d8752a8b265bdc6a1bab12c4d04582c87762cac46688b891fb9b"
  }
  getToken(params).then(res => {
    console.log(res);
  })


  return (
    <div>
      <Header />
      <BasicTabs tabsItem={tabsItem} tabsColor='#EEF2F3' tabsTop={40} />
    </div >
  );
};
export default memo(Home);
