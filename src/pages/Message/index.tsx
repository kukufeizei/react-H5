
import { FC, memo } from 'react';

import ListItem from './listItem';
import systemNotice from '@/assets/images/message/system-notice.png'
import deleteImg from '@/assets/images/message/delete.png'
import entry from '@/assets/images/message/entry.png'
import fans from '@/assets/images/message/fans.png'
import manage from '@/assets/images/message/manage.png'
import newImg from '@/assets/images/message/new.png'
import newNotice from '@/assets/images/message/new-notice.png'
import reply from '@/assets/images/message/reply.png'
import star from '@/assets/images/message/star.png'
import thumbsUp from '@/assets/images/message/thumbs-up.png'
import userMessage from '@/assets/images/message/user-message.png'
import wiki from '@/assets/images/message/wiki.png'

import type { MessageTypes } from './type'



const Message: FC = () => {
  const Item: MessageTypes[] = [
    {
      source: 'APP',
      items: [{
        title: '系统通知',
        content: '请更新至版本1.0.2',
        icon: systemNotice,
        date: '08-29'
      },
      {
        title: '账号信息',
        content: '欢迎您使用搜词',
        icon: userMessage,
        date: '07-17'
      }]
    },
    {
      source: '词条',
      items: [{
        title: '新词条',
        content: '新词条『质点系的重量』被创建',
        icon: newImg,
        date: '08-29'
      },
      {
        title: '词条百科',
        content: '词条『极限』被创建',
        icon: wiki,
        date: '07-17'
      },
      {
        title: '词条管理',
        content: '设置优质回复',
        icon: manage,
        date: '09-08'
      },
      {
        title: '创建词条',
        content: '申请创建词条',
        icon: entry,
        date: '08-26'
      }
      ]
    },
    {
      source: '问答',
      items: [{
        title: '新问题提醒',
        content: '你关注的词条有新的问题',
        icon: newNotice,
        date: '08-29'
      },
      {
        title: '回复我',
        content: 'mayday 回复了你',
        icon: reply,
        date: '07-17'
      },
      {
        title: '点赞我',
        content: '巧乐兹 点赞了你的回复',
        icon: thumbsUp,
        date: '09-08'
      },
      {
        title: '收藏更新',
        content: '暂无消息',
        icon: star,
      },
      {
        title: '删除通知',
        content: '暂无消息',
        icon: deleteImg,
      }
      ]
    },
    {
      source: '粉丝',
      items: [{
        title: '通知',
        content: '您还没有粉丝哦',
        icon: fans,
      }]
    },
  ]
  return (
    <>
      <ListItem Item={Item} />
    </>
  );
};
export default memo(Message);
