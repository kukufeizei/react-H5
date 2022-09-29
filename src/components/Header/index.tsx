
import { memo, FC, useEffect, useState } from 'react';
import { Button, Space, Input, Grid } from 'antd-mobile'
import { EditSOutline } from 'antd-mobile-icons'
import styles from './index.module.less'
import Logo from '@/assets/images/logo.png'
import { throttle } from '@/utils';
import useScrollDirection from '@/hooks/useScrollDirection';

const Header: FC = () => {
    const scrollChange = (e?: any) => {
        if (!e) return
        const scroll = e.target.scrollTop
        const {isScrollToTop} = useScrollDirection()
        console.log(isScrollToTop);

        // 监听滚动条距离顶部距离
        // console.log(1 - scroll * 0.05);

        const search_input = document.getElementsByClassName('search_large')[0] as HTMLElement
        // console.log(scroll);
        if (scroll > 0 && scroll <= 122) {
            search_input.style.width = `calc(100% - ${scroll + 35}px)`
            search_input.style.top = '10px'
            if (scroll + 35 > 68) {
                search_input.style.position = 'fixed'
                search_input.style.width = 'calc(100% - 173px)'
            }
        }
        // search_input.style.opacity = `${(1 - scroll * 0.04)}`
        // domtest.style.backgroundColor = props.tabsColor as string
        // domtest.style.position = 'fixed'
        // search_input.style.width = '200px'
        // if (Number(search_input.style.opacity) <= 0) {
        //     search_input.style.position = 'fixed'
        //     search_input.style.top = '20px'
        //     // search_input.style.opacity = '1'
        // } else {
        //     // search_input.style.position = 'fixed'
        //     // search_input.style.top = '20px'
        //     // search_input.style.opacity = '1'
        // }

        if (!scroll) {
            search_input.style.width = '100%'
        }
    }
    useEffect(() => {
        // 滚动条滚动时触发
        window.addEventListener('scroll', throttle(scrollChange, 100), true)
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
                    <Grid.Item span={12}> </Grid.Item>
                    <Grid.Item span={5}>
                        <Button className={styles.btn}>
                            <Space>
                                <EditSOutline />
                                <span className={styles.letter}>提问</span>
                            </Space>
                        </Button>
                    </Grid.Item>
                </Grid>
                <div className={`${styles.search} flex justify-center`}>
                    <Input placeholder='已收录504个词条' type='text' className={`${styles.search_input} search_large`} />
                </div>
            </div>
        </>
    );
};
export default memo(Header);
