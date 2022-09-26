/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useState, useEffect } from 'react';

import styles from './index.module.less'
import { Tabs, Badge } from 'antd-mobile';
import Empty from '@/components/Empty'
import Item from '@/components/Item'
import Macy from "macy"
import type { PropsTypes, ItemType } from './type'

const BasicTabs: FC<PropsTypes> = (props) => {
    const [tabs, setTabs] = useState<string>('question')
    const [list, setList] = useState<ItemType[]>([])
    const [macy, SetMacy] = useState<any>(null)
    // 模拟获取数据
    const getList = () => {
        const result: ItemType[] = [
            {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F07%2F13%2F5b691a9c69162.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666753819&t=5e399a244af7bf5e5a76ac8aa014c34b',
                title: 'pubuliuhaha'
            }, {
                img: 'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
                title: 'pubuliuhaha'
            }, {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.soutu123.com%2Fback_pic%2F04%2F21%2F09%2F63582f170a91d5f.jpg%21%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.soutu123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666753819&t=2d435457d848107da16e946b0f65cde9',
                title: 'pubuliuhaha'
            }, {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2-bs.511doc.com%2Fmark%2F00%2F00%2F73%2F11%2Fe7d0c042caf8fae56af2fbe4ef8b7963.jpg%21%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Ffw%2F640%2Fclip%2F640x500a0a500&refer=http%3A%2F%2Fimg2-bs.511doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666753819&t=744ad13ea246cc65038489b3467132cb',
                title: 'pubuliuhaha'
            }, {
                img: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
                title: 'pubuliuhaha'
            }, {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F05%2F20200305163327_poyes.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666754001&t=5a026e1f060ea3ab8dffd103ea4978f8',
                title: 'pubuliuhaha'
            },
            {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yipic.cn%2Fthumb%2F4a827e42%2F447ff950%2F6d7e1637%2F4e79c78a%2Fbig_4a827e42447ff9506d7e16374e79c78a.jpg%3Fx-oss-process%3Dimage%2Fformat%2Cwebp%2Fsharpen%2C100&refer=http%3A%2F%2Fimg.yipic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666754036&t=39ddf8b93613299461c606efb98a0f69',
                title: 'pubuliuhaha'
            },
            {
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yipic.cn%2Fthumb%2F3db5da1a%2Fef5f4f08%2Ffc775737%2Ff69de64f%2Fbig_3db5da1aef5f4f08fc775737f69de64f.jpg%3Fx-oss-process%3Dimage%2Fformat%2Cwebp%2Fsharpen%2C100&refer=http%3A%2F%2Fimg.yipic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666754105&t=2150e0366b7414b2fd828af618ec4907',
                title: 'pubuliuhaha'
            }
        ]
        setList((list) => {
            return [...list, ...result]
        })
    }


    useEffect(() => {
        getList()
    }, [])

    const InitMacy = () => {
        if (!macy) {
            SetMacy(
                new Macy({
                    container: "#macy_container",
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
        console.log(macy);

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
                        getList()
                        macy.reInit()
                    }}
                >
                    {props.tabsItem.map(item => (
                        <Tabs.Tab title={
                            <Badge content={item.count || ''} style={{ '--right': '-10px', '--top': '8px' }}>
                                {item.title}
                            </Badge>
                        } key={item.key}
                        />
                    ))}

                </Tabs>
                {
                    tabs === 'reply' ? <Empty status='empty' /> :

                        <div style={{ padding: '5px' }}>
                            <ul id='macy_container' className={styles.macy_container}>
                                {
                                    list.map((ele, i) => {
                                        return (
                                            <li key={i}>
                                                <img src={ele.img} />
                                                <p>{ele.title}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                }
            </div>
        </>
    );
};

export default memo(BasicTabs);
