import { White } from '@/typings';
import { lazy } from 'react';
const Mine = lazy(() => import(/* chunkName: "Search" */ '@/pages/Mine'));
const Message = lazy(() => import(/* chunkName: List */ '@/pages/Message'));
const Home = lazy(() => import(/* chunkName: Home */ '@/pages/Home'));
const Index = lazy(() => import(/* chunkName: Index */ '@/pages/Index'));
const Other = lazy(() => import(/* chunkName: Other */ '@/pages/Other'));
const NoFound = lazy(
  () => import(/* chunkName: NoFound */ '../components/NoFound'),
);
export const TabBarList: White.RouteTabBar[] = [
  {
    path: '/',
    component: Home,
    icon: 'white-home1',
    sceneMode: 'scroll',
    title: '首页',
  },
  {
    path: '/message',
    component: Message,
    icon: 'white-order',
    sceneMode: 'scroll',
    title: '消息',
  },
  {
    path: '/mine',
    component: Mine,
    icon: 'white-account',
    sceneMode: 'scroll',
    title: '我的',
  },
];

const routes: White.RouteConfig[] = [
  {
    path: '/',
    component: Index,
    tabBars: TabBarList,
  },
  {
    path: '/other',
    component: Other,
  },
  {
    path: '*',
    component: NoFound,
  },
];

export default [...routes];
