import { memo, FC } from 'react';
import styles from './index.module.less'
import Nav from '@/components/NavBar'
import { Divider } from 'antd-mobile'
import EntryTabs from '@/components/BasicTabs/entryTabs';
import type { TabsItemType } from '@/components/BasicTabs/type'
import { getAuth } from '@/utils/index';

const Entry: FC = () => {
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
        <div className={styles.entry}>
            <Nav />
            <div>
                <Divider />
                <div className={styles.title}>{getAuth('entry') || '未知词条'}</div>
                <EntryTabs tabsItem={tabsItem} tabsColor='#fff' tabsTop={60} />
            </div>
        </div >
    );
};
export default memo(Entry);
