/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Macy from "macy"
import Empty from '@/components/Empty'
import styles from './index.module.less'

import type { PropsTypes, ItemType } from './type'
import type { ListParams } from '@/api/model/type'

import { InfiniteScroll, List, Image } from 'antd-mobile';
import { MessageOutline } from 'antd-mobile-icons'
import { useAliOssSystem } from '@/hooks/useAliOssSystem';

import { randomColor, throttle } from '@/utils';
import { useSelector } from 'react-redux'
import { newListApi } from '@/api/route'
import { setAuth, getAuth } from '@/utils/index';
import useWindowSize from '@/hooks/useWindoSize'

const BasicTabs: FC<PropsTypes> = (props) => {
    const [list, setList] = useState<ItemType[]>([])
    const [scroll, setScroll] = useState(0)
    const [macy, setMacy] = useState<any>(null)
    const [hasMore, setHasMore] = useState(false)
    const nva = useNavigate();
    const { user } = useSelector(state => state)
    const { width } = useWindowSize()
    const { getRealImgUrl } = useAliOssSystem();
    const [params, setParams] = useState<ListParams>({
        user_id: user.user.user_id,
        term_id: -1,
        prev_id: 0,
        prev_score: '0'
    })

    // 初始化macy
    const InitMacy = () => {
        if (!macy) {
            setMacy(
                new Macy({
                    container: ".macy_container",
                    trueOrder: false,
                    mobileFirst: true,
                    waitForImages: true,
                    margin: { x: 10, y: 10 },
                    debug: true,
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
    // 获取列表数据
    const getList = async () => {

        const data = await newListApi(params)

        if (!(JSON.stringify(data.result.data) === JSON.stringify(list))) {
            setList(val => [...val, ...data.result.data])
        }

        setParams({
            user_id: user.user.user_id,
            term_id: -1,
            prev_id: data.result.prev_id,
            prev_score: data.result.prev_score,
        })

    }
    // 加載更多
    const loadMore = async () => {
        setHasMore(params.prev_id! >= 0)
        if (params.prev_id! >= 0) {
            await getList()
        }
    }

    useEffect(() => {
        loadMore()
    }, [])

    // 不同頁面渲染逻辑
    const leftDownData = (ele: any) => {
        return (
            <p className={styles.term_name} onClick={() => {
                setAuth('entry', ele.term_name)
                nva(`/entry/${ele.term_id}`)
            }}>{ele.term_name}</p>
        )
    }

    const rightDownData = (ele: any) => {
        return (
            <div>
                <span className='align-middle'><MessageOutline /></span>
                <span className={styles.count}>{ele.comment_count}</span>
            </div>
        )
    }

    // 获取图片占位宽高
    const getImgWidth = () => {
        return (width - 24) / 2
    }

    const getImgHeight = (w: number, h: number) => {
        if (!w || !h) return 0
        // 宽高比
        const sacle: number = w / h
        return ((width - 24) / 2) / sacle
    }

    return (
        <>
            <div style={{ padding: '10px', overflowY: 'scroll', overflow: 'scroll' }} id='mylist'>
                <List>
                    <ul className={`macy_container ${styles.macy_container} flex flex-wrap`} >
                        {
                            list.length
                                ?
                                list.map((ele, i) => {
                                    return (
                                        <li key={i} >

                                            {
                                                ele.image_list ?
                                                    <Image fit='cover'
                                                        onClick={() => {
                                                            nva(`/details/${ele.timeline_id}`)
                                                        }}
                                                        src={getRealImgUrl(ele.image_list[0].url as string)}
                                                        width={getImgWidth()}
                                                        height={getImgHeight(ele.image_list[0].width as number, ele.image_list[0].height as number)}
                                                    />
                                                    : <p onClick={() => {
                                                        nva(`/details/${ele.timeline_id}`)
                                                    }}>{ele.text}</p>
                                            }

                                            <p style={{ fontWeight: 'bold' }} >{ele.title || ele.superior_info}</p>
                                            <div className={`flex justify-between ${styles.mall10}`}>
                                                <div className={`flex justify-center items-center ${styles.name}`} style={{ color: randomColor() }}>
                                                    {leftDownData(ele)}
                                                </div>
                                                {rightDownData(ele)}
                                            </div>
                                        </li>
                                    )
                                })

                                : <Empty status='empty' />


                        }
                    </ul>
                </List>
                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={500} />
            </div>
        </>
    );
};

export default memo(BasicTabs);
