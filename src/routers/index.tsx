import { White } from '@/typings';
import { lazy } from 'react';

import HomeIcon from '@/assets/images/home.png'
import MessageIcon from '@/assets/images/message.png'
import MineIcon from '@/assets/images/mine.png'

const Mine = lazy(() => import(/* chunkName: "Search" */ '@/pages/Mine'));
const Message = lazy(() => import(/* chunkName: List */ '@/pages/Message'));
const Home = lazy(() => import(/* chunkName: Home */ '@/pages/Home'));
const Index = lazy(() => import(/* chunkName: Index */ '@/pages/Index'));
const QuestionDetails = lazy(() => import(/* chunkName: Other */ '@/pages/QuestionDetails'));
const NoFound = lazy(
  () => import(/* chunkName: NoFound */ '../components/NoFound'),
);
export const TabBarList: White.RouteTabBar[] = [
  {
    path: '/',
    component: Home,
    icon: HomeIcon,
    sceneMode: 'scroll',
    title: '',
  },
  {
    path: '/message',
    component: Message,
    icon: MessageIcon,
    sceneMode: 'scroll',
    title: '',
  },
  {
    path: '/mine',
    component: Mine,
    icon: MineIcon,
    sceneMode: 'scroll',
    title: '',
  },
];

const routes: White.RouteConfig[] = [
  {
    path: '/',
    component: Index,
    tabBars: TabBarList,
  },
  {
    path: '/details',
    component: QuestionDetails,
  },
  {
    path: '*',
    component: NoFound,
  },
];

export default [...routes];
