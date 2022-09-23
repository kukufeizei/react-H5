# React-ts

## 说明

**该项目是由 Vite 构建,基于 React Hooks 框架配合 Typescript 语言的 H5 端快速开发的模板项目,该项目适配屏幕使用的`postcss-px-to-viewport`直接写 px 自动转换为 vw 或者 rem,
项目也添加了路由切换动画,适配`chrome safari底部工具栏`**


## 预览地址

## Project setup

```
yarn install
```
### Compiles and hot-reloads for development
```
yarn dev
```
### Compiles and minifies for production
```
yarn build:prod
```
### Lints and fixes files
```
yarn lint
```
## To-do List
- [x] vite
- [x] typescript
- [x] react-route6
- [x] postcss-px-to-viewport
- [x] react-router(route add animotion)
- [x] cdn
- [x] antd-mobile5
- [x] tailwindcss
## 项目目录
```
react-ts-h5-template
├─ .env.dev //dev⚙
├─ .env.pre //pre⚙
├─ .env.prod //prod⚙
├─ config-overrides.js //webpack⚙
├─ paths.json //alias⚙
├─ public
│  ├─ favicon.ico
│  ├─ index.html //index文件
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ App.css
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ api //请求📃
│  │  └─ route.ts
│  ├─ assets  //资源📃
│  │  ├─ css
│  │  │  ├─ common.scss
│  │  │  └─ variables.scss
│  │  ├─ fonts
│  │  │  └─ iconfont.json
│  │  └─ images
│  │     ├─ common
│  │     │  └─ 404.png
│  │     └─ search_tab.png
│  ├─ components //组件📃
│  │  ├─ AnimatedSwitch //动画切换组件
│  │  ├─ LoadingView //加载组件
│  │  ├─ NoFound //404组件
│  ├─ hooks //自定义hooks📃
│  │  ├─ useAxios.tsx //网络请求hook
│  │  ├─ useDebounce.tsx //防抖hook
│  │  ├─ useThrottle.tsx //节流hook
│  │  └─ useTitle.tsx //标题hook
│  ├─ index.tsx // 入口
│  ├─ layout //布局📃
│  │  ├─ TabBarView //底部栏
│  ├─ logo.svg //icon
│  ├─ model //model📃
│  ├─ pages //页面
│  ├─ routers //路由📃
│  ├─ typings //类型📃
│  └─ utils //工具类📃
│     └─ index.ts
└─ tsconfig.json

```

## 图标地址

```
https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2119875
```

<!-- 项目规范 -->

组件文件夹采用大驼峰
.tsx .less 都用小驼峰

公共类型写在typings



api 接口定义对应要写出类型model   每个接口对应一个model  

接口命名规范 ： 请求方式+接口名称  小驼峰