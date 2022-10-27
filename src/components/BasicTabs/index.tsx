/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Macy from "macy"
import Empty from '@/components/Empty'
import styles from './index.module.less'

import type { PropsTypes, ItemType } from './type'
import type { ListParams } from '@/api/model/type'

import { Tabs, Badge, InfiniteScroll, List } from 'antd-mobile';
import { MessageOutline } from 'antd-mobile-icons'
import { useAliOssSystem } from '@/hooks/useAliOssSystem';

import { randomColor, setSticky } from '@/utils';
import { useSelector } from 'react-redux'
import { newListApi, goodListApi, commentedListApi } from '@/api/route'

const BasicTabs: FC<PropsTypes> = (props) => {
    const [tabs, setTabs] = useState<string>('home_question')
    const [list, setList] = useState<ItemType[]>([])
    const [macy, setMacy] = useState<any>(null)
    const [hasMore, setHasMore] = useState(true)
    const nva = useNavigate();
    const { user } = useSelector(state => state)
    const { getRealImgUrl } = useAliOssSystem();

    const [params, setParams] = useState<ListParams>({
        user_id: user.user.user_id,
        term_id: -1,
        prev_id: 0,
        prev_score: '0'
    })
    // 获取列表数据
    const getList = async () => {
        let request;
        switch (tabs) {
            case 'home_question':
                request = newListApi(params)
                break;
            case 'home_goodQuestion':
                request = goodListApi(params)
                break;
            case 'home_waitReply':
                request = commentedListApi(params)
                break;
        }

        const data = await request
        setList(val => [...val, ...data.result.data])

        setParams({
            user_id: user.user.user_id,
            term_id: -1,
            prev_id: data.result.prev_id || -1,
            prev_score: data.result.prev_score,
        })

    }
    // 加載更多
    const loadMore = async () => {
        getList()
        setHasMore(params.prev_id! >= 0)
    }
    useEffect(() => {
        loadMore()
    }, [tabs])

    // 设置粘性tabs
    useEffect(() => {
        setSticky(
            document.getElementsByClassName('adm-tabs',)[0] as HTMLElement,
            props.tabsColor as string,
            props.tabsTop
        )
    }, [])

    // 初始化macy
    const InitMacy = () => {
        // 没数据直接删掉监听
        if (!list.length && macy) {
            macy.remove();
            return
        }

        if (!macy) {
            setMacy(
                new Macy({
                    container: ".macy_container",
                    trueOrder: false,
                    mobileFirst: true,
                    waitForImages: false,
                    margin: { x: 10, y: 10 },
                    columns: 2 // 设置列数
                })
            )
        } else {
            macy.runOnImageLoad(() => {
                macy.reInit()
            }, true)
        }
    }

    useEffect(() => {
        InitMacy()
    }, [list])

    return (
        <>
            <div className={styles.basic_tabs}>
                <Tabs
                    defaultActiveKey={tabs}
                    onChange={key => {
                        setTabs(key)
                        setList([])
                        macy.reInit()
                        setParams({
                            user_id: user.user.user_id,
                            term_id: -1,
                            prev_id: 0,
                            prev_score: '0',
                        })
                    }}
                >
                    {props.tabsItem!.map(item => (
                        <Tabs.Tab title={
                            <Badge content={item.count || ''} style={{ '--right': '-10px', '--top': '8px' }}>
                                {item.title}
                            </Badge>
                        } key={item.key}
                        />
                    ))}

                </Tabs>
                <div style={{ padding: '10px', overflowY: 'auto' }}>
                    <List>
                        <ul className={`macy_container ${styles.macy_container}`}>
                            {
                                list.length
                                    ?
                                    list.map((ele, i) => {
                                        return (
                                            <li key={i} onClick={() => { nva(`/details/${ele.timeline_id}`) }}>

                                                {
                                                    ele.image_list ? <img src={getRealImgUrl(ele.image_list[0].url as string)} /> : <p>{ele.text}</p>
                                                }

                                                <p>{ele.title}</p>
                                                <div className={`flex justify-between ${styles.mall10}`}>
                                                    <div className={`flex justify-center items-center ${styles.name}`} style={{ color: randomColor() }}>{ele.nickname}</div>
                                                    <div>
                                                        <span className='align-middle'><MessageOutline /></span>
                                                        <span className={styles.count}>{ele.comment_count}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                    :
                                    <Empty status='empty' />
                            }
                        </ul>
                    </List>
                    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
                </div>
            </div>
        </>
    );
};

export default memo(BasicTabs);
