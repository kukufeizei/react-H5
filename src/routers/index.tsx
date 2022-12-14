import { White } from '@/typings';
import { lazy } from 'react';

import HomeIconActive from '@/assets/images/tabviews-icon/home-active.png'
import MessageIconActive from '@/assets/images/tabviews-icon/message-active.png'
import MineIconActive from '@/assets/images/tabviews-icon/mine-active.png'

import HomeIcon from '@/assets/images/tabviews-icon/home.png'
import MessageIcon from '@/assets/images/tabviews-icon/message.png'
import MineIcon from '@/assets/images/tabviews-icon/mine.png'


const Mine = lazy(() => import(/* chunkName: "Search" */ '@/pages/Mine'));
const Message = lazy(() => import(/* chunkName: List */ '@/pages/Message'));
const Home = lazy(() => import(/* chunkName: Home */ '@/pages/Home'));
const Index = lazy(() => import(/* chunkName: Index */ '@/pages/Index'));
const QuestionDetails = lazy(() => import(/* chunkName: QuestionDetails */ '@/pages/QuestionDetails'));
const CommentDetails = lazy(() => import(/* chunkName: CommentDetails */ '@/pages/CommentDetails'));
const UserIndex = lazy(() => import(/* chunkName: UserIndex */ '@/pages/UserIndex'));
const Entry = lazy(() => import(/* chunkName: UserIndex */ '@/pages/entryTabs'));


const NoFound = lazy(
  () => import(/* chunkName: NoFound */ '../components/NoFound'),
);
export const TabBarList: White.RouteTabBar[] = [
  {
    path: '/',
    component: Home,
    icon: HomeIcon,
    activeIcon: HomeIconActive,
    sceneMode: 'scroll',
    title: '',
  },
  {
    path: '/message',
    component: Message,
    icon: MessageIcon,
    activeIcon: MessageIconActive,
    sceneMode: 'scroll',
    title: '',
  },
  {
    path: '/mine',
    component: Mine,
    icon: MineIcon,
    activeIcon: MineIconActive,
    sceneMode: 'scroll',
    title: '',
  },
];

const routes: White.RouteConfig[] = [
  {
    path: '/',
    component: Index,
    tabBars: TabBarList,
    cache: true
  },
  {
    path: '/details/:timeline_id',
    component: QuestionDetails,
  },
  {
    path: '/comment/:comment_id',
    component: CommentDetails,
  },
  {
    path: '/user/:s_user_id',
    component: UserIndex,
  },
  {
    path: '/entry/:term_id',
    component: Entry,
  },
  {
    path: '*',
    component: NoFound,
  },
];

export default [...routes];
