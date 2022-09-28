
import { memo, FC, useEffect, useState } from 'react';
import { Button, Space, Input, Grid } from 'antd-mobile'
import { EditSOutline } from 'antd-mobile-icons'
import styles from './index.module.less'
import Logo from '@/assets/images/logo.png'
import { throttle } from '@/utils';

const Header: FC = () => {
    const [searchInputLarge, setSearchInputLarge] = useState(true)
    const scrollChange = (e?: any) => {
        // 监听滚动条距离顶部距离
        if (!e) return
        setSearchInputLarge(!(e.target.scrollTop > 0))
    }
    useEffect(() => {
        // 滚动条滚动时触发
        window.addEventListener('scroll', throttle(scrollChange, 200), true)
        return () => {
            window.removeEventListener('scroll', scrollChange, false)
        }
    }, [])

    return (
        <>
            <div className={styles.header}>
                <Grid columns={22} gap={8}>
                    <Grid.Item span={5}>
                        <img className='align-middle' src={Logo} alt="" />
                        <span className={`align-middle ${styles.text}`}>搜词</span>
                    </Grid.Item>
                    <Grid.Item span={12}>
                        {
                            !searchInputLarge && <Input placeholder='已收录504个词条' type='text' className={styles.search_input} />
                        }
                    </Grid.Item>
                    <Grid.Item span={5}>
                        <Button className={styles.btn}>
                            <Space>
                                <EditSOutline />
                                <span className={styles.letter}>提问</span>
                            </Space>
                        </Button>
                    </Grid.Item>
                </Grid>
                <div className={styles.search}>
                    {
                        searchInputLarge && <Input placeholder='已收录504个词条' type='text' className={`${styles.search_input} ${styles.search_w01}`} />
                    }
                </div>
            </div>
        </>
    );
};
export default memo(Header);
