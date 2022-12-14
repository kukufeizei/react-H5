/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Divider, Grid, Avatar, Image, InfiniteScroll } from 'antd-mobile'
import { LikeOutline } from 'antd-mobile-icons'
import { questionDetailsApi } from '@/api/route'
import { getAuth, setAuth } from '@/utils/index';
import { useAliOssSystem } from '@/hooks/useAliOssSystem';
import type { ReplyListType, QuestionDataType } from './type'

import Nav from '@/components/NavBar'
import styles from './index.module.less'
import MultiImageViewer from '@/components/MultiImageViewer';
import default_face from '@/assets/images/avatar.png'
import useWindowSize from '@/hooks/useWindoSize'

const Details = () => {
  const { getRealImgUrl } = useAliOssSystem();
  const [display, setDisplay] = useState(true)
  const [list, setList] = useState<ReplyListType[]>([])
  const [data, setData] = useState({} as QuestionDataType)
  const [hasMore, setHasMore] = useState(false)
  const { width } = useWindowSize()
  const childRef = useRef<any>(null)
  const params = useParams()
  const nva = useNavigate();
  const [initParams, setInitParams] = useState({
    user_id: getAuth('user_id') as string,
    timeline_id: params.timeline_id,
    prev_id: 0,
    prev_score: '0'
  })
  // 获取详情
  const getDetails = async () => {
    const res = await questionDetailsApi(initParams)
    // 问题详情
    res.result.timeline && setData(res.result.timeline)
    const l = [...list, ...res.result.data]
    const newArr = [...new Set(l)];
    setList(newArr)

    setInitParams({
      user_id: getAuth('user_id') as string,
      timeline_id: params.timeline_id,
      prev_id: res.result.prev_id,
      prev_score: res.result.prev_score
    })
  }
  // 加載更多
  const loadMore = async () => {
    setHasMore(initParams.prev_id! >= 0)
    if (initParams.prev_id! >= 0) {
      await getDetails()
    }
  }

  useEffect(() => {
    loadMore()
  }, [])

  // 获取图片占位宽高
  const getImgWidth = () => {
    return (width * 0.79)
  }

  const getImgHeight = (w: number, h: number) => {
    if (!w || !h) return 0
    // 宽高比
    const sacle: number = w / h
    return (width * 0.79) / sacle
  }

  const fallback = () => {
    return (
      <Avatar
        src={default_face}
        style={{ '--size': '40px', '--border-radius': '40px' }}
      />
    )
  }

  // 点击预览图片
  const handleClickImg = (e: any) => {
    const ev = e || window.event
    ev.stopPropagation()
    childRef.current!.set(true);
    // setDisplay(!display)
  }

  return (
    <div className={styles.details}>
      <div style={{ display: display ? 'block' : 'none' }}>
        <Nav title={data.term_name} />
      </div>
      <div className={styles.pd}>
        <Divider />
        <p className={styles.title}>{data.title || ''}</p>
        <div className={styles.ma}>
          <Grid columns={10} >
            <Grid.Item span={6}>
              <div className='flex justify-start'>
                <div className={styles.maright} onClick={() => { nva(`/user/${data.s_user_id}`) }}>
                  {
                    <Avatar
                      src={getRealImgUrl(data.face_url as string) as string}
                      style={{ '--size': '40px', '--border-radius': '40px' }}
                      fallback={fallback()}
                    />
                  }
                </div>
                <div>
                  <p className={styles.mt}>{data.nickname}</p>
                  <p className={styles.desc}>发布于{data.publish_time} · {data.browse_count || 0}次阅读</p>
                </div>
              </div>
            </Grid.Item>
            <Grid.Item span={4}>
              <div className={`${styles.btnbox}`}>
                <div>关注</div>
              </div>
            </Grid.Item>
          </Grid>
        </div>
        <div className={styles.qe_detail}>
          {data.text || ''}
        </div>
        {
          JSON.stringify(data.image_list) && (
            <div className={styles.mt20} onClick={(e) => handleClickImg(e)} >
              {
                data.image_list.map((e, i) => (
                  <Image
                    key={i}
                    src={getRealImgUrl(e.url as string) as string}
                    className={styles.imgs}
                    fit='cover'
                    width={getImgWidth()}
                    height={getImgHeight(e.width as number, e.height as number)}
                  />
                ))
              }
              <MultiImageViewer list={data.image_list.map((item) => item.url)} ref={childRef} />
              <Divider />
            </div>
          )
        }

        <div className={styles.reply}>
          <p className={styles.title2}>全部回复</p>
          {/* 回复区域 */}
          {
            list.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.ma}>
                    <Grid columns={10} >
                      <Grid.Item span={6}>
                        <div className='flex justify-start'>
                          <div className={styles.maright} onClick={() => { nva(`/user/${item.s_user_id}`) }}>
                            <Avatar src={getRealImgUrl(item.face_url as string) as string} style={{ '--size': '40px', '--border-radius': '40px' }} />
                          </div>
                          <div>
                            <p className={styles.mt}>{item.nickname}</p>
                            <p className={styles.desc}>{item.send_time}</p>
                          </div>
                        </div>
                      </Grid.Item>
                      <Grid.Item span={4}>
                        <div className={`${styles.btnbox}`}>
                          <span>
                            <LikeOutline fontSize={20} />{item.like_count}
                          </span>
                        </div>
                      </Grid.Item>
                    </Grid>
                  </div>
                  <div className={styles.reply_details} onClick={() => {
                    nva(`/comment/${item.comment_id}`)
                    setAuth('commit', JSON.stringify(item))
                  }}>
                    <p style={{ marginBottom: '10px' }}>{item.text || ''}</p>
                    <div onClick={(e) => handleClickImg(e)}>
                      {

                        JSON.stringify(item.image_list) && item.image_list.map((e, i) => (
                          <Image key={i}
                            src={getRealImgUrl(e.url as string) as string}
                            className={styles.imgs}
                            fit='cover'
                            width={getImgWidth()}
                            height={getImgHeight(e.width as number, e.height as number)}
                          />
                        ))
                      }
                      {item.image_list && <MultiImageViewer list={item.image_list.map((item) => item.url)} ref={childRef} />}

                    </div>
                    {/* 二级回复 */}
                    {item.secondary_comment_list &&
                      item.secondary_comment_list.map((item, index) => {
                        return (
                          <div className={styles.reply_people} key={index}>
                            <div className={styles.fsz}>
                              {item.ref_nickname &&
                                (
                                  <>
                                    <span className={styles.name}>{item.nickname}:</span><span>回复</span>
                                  </>
                                )
                              }
                              {!(item.ref_user_id === item.top_user_id) &&
                                (<span className={styles.name}>{item.ref_nickname}</span>)
                              }
                              <span>{item.text || ''}</span>
                            </div>
                          </div>
                        )
                      })
                    }
                    {
                      list[index].comment_count > 5 && <div className={styles.more}>查看更多回复 </div>
                    }
                  </div>
                </div>
              )
            })
          }

          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={250} />

        </div>

      </div>
    </div >
  );
};
export default memo(Details);
