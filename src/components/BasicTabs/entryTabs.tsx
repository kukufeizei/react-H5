/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Macy from "macy"
import Empty from '@/components/Empty'
import styles from './index2.module.less'

import type { PropsTypes, ItemType } from './type'
import type { ListParams } from '@/api/model/type'

import { Tabs, Badge, InfiniteScroll, List, Avatar } from 'antd-mobile';
import { MessageOutline, LikeOutline } from 'antd-mobile-icons'
import { useAliOssSystem } from '@/hooks/useAliOssSystem';

import { randomColor, setSticky } from '@/utils';
import { useSelector } from 'react-redux'
import { entryCommentListApi, entryNewsQuestionListApi, entryNewsGoodsListApi, entryNewsWaitCommentListApi } from '@/api/route'

const BasicTabs: FC<PropsTypes> = (props) => {
    const userIdParams = useParams()
    const [tabs, setTabs] = useState<string>('home_question')
    const [list, setList] = useState<ItemType[]>([])
    const [macy, setMacy] = useState<any>(null)
    const [hasMore, setHasMore] = useState(false)
    const nva = useNavigate();
    const { user } = useSelector(state => state)
    const { getRealImgUrl } = useAliOssSystem();

    const [params, setParams] = useState<ListParams>({
        user_id: user.user.user_id,
        term_id: userIdParams.term_id,
        prev_id: 0,
        prev_score: '0'
    })
    // 获取列表数据
    const getList = async () => {
        let request;
        switch (tabs) {
            case 'home_goodReply':
                request = entryCommentListApi(params)
                break;
            case 'home_question':
                request = entryNewsQuestionListApi(params)
                break;
            case 'home_goodQuestion':
                request = entryNewsGoodsListApi(params)
                break;
            case 'home_waitReply':
                request = entryNewsWaitCommentListApi(params)
                break;
        }

        const data = await request

        setList(val => [...val, ...data.result.data])

        setParams({
            user_id: user.user.user_id,
            term_id: userIdParams.term_id,
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

    const leftDownData = (ele: any) => {
        if (['home_question', 'home_waitReply'].includes(tabs)) {
            // “新问题”和“待回复”下，item左下角显示term_name，
            return (
                <p className={styles.term_name}>{ele.term_name}</p>
            )
        } else {
            // 在“好问题”好“优质回复”下，item左下角显示用户昵称nickname和头像face_url，
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
                            term_id: userIdParams.term_id,
                            prev_id: 0,
                            prev_score: '0'
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
                                            <li key={i} onClick={() => {
                                                nva(`/details/${ele.timeline_id}`)
                                            }}>

                                                {
                                                    ele.image_list ? <img src={getRealImgUrl(ele.image_list[0].url as string)} /> : <p>{ele.text}</p>
                                                }

                                                <p style={{ fontWeight: 'bold' }}>{ele.title || ele.superior_info}</p>
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
                    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={250} />
                </div>
            </div>
        </>
    );
};

export default memo(BasicTabs);
