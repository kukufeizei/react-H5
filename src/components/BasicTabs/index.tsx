/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Macy from "macy"
import Empty from '@/components/Empty'
import styles from './index.module.less'

import type { PropsTypes, ItemType } from './type'
import type { ListParams } from '@/api/model/type'

import { Tabs, Badge, InfiniteScroll, List, Avatar, Image } from 'antd-mobile';
import { MessageOutline, LikeOutline } from 'antd-mobile-icons'
import { useAliOssSystem } from '@/hooks/useAliOssSystem';

import { randomColor, setSticky } from '@/utils';
import { useSelector } from 'react-redux'
import { newListApi, goodListApi, commentedListApi, goodCommentListApi } from '@/api/route'
import { setAuth, getAuth } from '@/utils/index';
import useWindowSize from '@/hooks/useWindoSize'


const BasicTabs: FC<PropsTypes> = (props) => {
    const [tabs, setTabs] = useState<string>('home_question')
    const [list, setList] = useState<ItemType[]>([])
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
            case 'home_goodReply':
                request = goodCommentListApi(params)
                break;
        }

        const data = await request

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
        if (getAuth(tabs) && getAuth(`${tabs}params`)) {
            setList(JSON.parse(getAuth(tabs) as string))
            setParams(JSON.parse(getAuth(`${tabs}params`) as string))
            JSON.parse(getAuth(`${tabs}params`) as string).prev_id >= 0 && loadMore()
            return;
        }

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


    // 不同頁面渲染逻辑
    const leftDownData = (ele: any) => {
        if (['home_question', 'home_waitReply'].includes(tabs)) {
            // “新问题”和“待回复”下，item左下角显示term_name
            return (
                <p className={styles.term_name} onClick={() => {
                    setAuth('entry', ele.term_name)
                    nva(`/entry/${ele.term_id}`)
                }}>{ele.term_name}</p>
            )
        } else {
            // 在“好问题”好“优质回复”下，item左下角显示用户昵称nickname和头像face_url
            return (
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    <Avatar src={getRealImgUrl(ele.face_url as string) as string} style={{ '--size': '20px', '--border-radius': '20px' }} />
                    <div style={{ marginLeft: '5px' }}>{ele.nickname}</div>
                </div>
            )
        }
    }

    const rightDownData = (ele: any) => {
        if (['home_question', 'home_waitReply'].includes(tabs)) {
            // “新问题”和“待回复”下，右下角显示comment_count和回复图标
            return (
                <div>
                    <span className='align-middle'><MessageOutline /></span>
                    <span className={styles.count}>{ele.comment_count}</span>
                </div>
            )
        } else {
            // 在“好问题”好“优质回复”下，右下角显示like_count和点赞图标；
            return (
                <div>
                    <span className='align-middle'><LikeOutline fontSize={20} /></span>
                    <span className={styles.count}>{ele.like_count}</span>
                </div>
            )

        }
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

    // 切换tabs
    const handleChangeTabs = (key: string) => {
        setTabs(key)
        if (!tabs) {
            setAuth(tabs, JSON.stringify(list))
        }
        setAuth(`${tabs}params`, JSON.stringify(params))
        setList([])
        setParams({
            user_id: user.user.user_id,
            term_id: -1,
            prev_id: 0,
            prev_score: '0',
        })
    }

    let startY: any, endY: any
    // touch事件
    const handleTouchStart = (e: any) => {
        startY = e.changedTouches[0].clientX
    };
    const handleTouchMove = (e: any) => {
        endY = e.changedTouches[0].clientX
    };
    const handleTouchEnd = (e: any) => {
        // 获取滑动范围
        if (startY > -1 && endY > -1) {
            if (Math.abs(startY - endY) > 100) {
                if (startY > endY) {

                    const index = props.tabsItem!.findIndex((val) => {
                        return val.key === tabs
                    })
                    if (index >= props.tabsItem!.length - 1) return
                    handleChangeTabs(props.tabsItem![index + 1].key)
                    startY = -1
                    endY = -1

                } else {

                    const index = props.tabsItem!.findIndex((val) => {
                        return val.key === tabs
                    })
                    if (index <= 0) return
                    handleChangeTabs(props.tabsItem![index - 1].key)
                    startY = -1
                    endY = -1
                }
            }
        }



    };

    return (
        <>
            <div className={styles.basic_tabs} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                <Tabs
                    defaultActiveKey={tabs}
                    activeKey={tabs}
                    onChange={key => handleChangeTabs(key)}
                >
                    {props.tabsItem!.map(item => (
                        <Tabs.Tab key={item.key} title={
                            <Badge content={item.count || ''} style={{ '--right': '-10px', '--top': '8px' }}>
                                {item.title}
                            </Badge>
                        }
                        />
                    ))}

                </Tabs>
                <div style={{ padding: '10px', overflowY: 'auto' }}>
                    <List>
                        <ul className={`macy_container ${styles.macy_container} flex flex-wrap`}>
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
                                    :
                                    <Empty status='empty' />
                            }
                        </ul>
                    </List>
                    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={500} />
                </div>
            </div>
        </>
    );
};

export default memo(BasicTabs);
