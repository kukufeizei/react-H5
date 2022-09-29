/* eslint-disable no-undef */
/**
 * 设置登录人信息
 * @param auth 参数
 */
export const setAuth = (auth: string) => {
  window.localStorage.setItem('auth', auth);
};

/**
 * 获取url参数
 * @param search url参数
 */
export const searchObj = (search: string) => {
  const body = JSON.parse(
    '{"'.concat(
      decodeURIComponent(search.substring(1))
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"'),
      '"}',
    ),
  );
  return body;
};

/**
 * 获取登录人信息
 */
export const getAuth = () => {
  const auth = window.localStorage.getItem('auth');
  return auth || '';
};
export const getCode = () => {
  return window.location.search
    ? searchObj(window.location.search).code
    : window.location.pathname.split('/')[2];
};

export const treeToList = (list: any[], parents: string | string[]) => {
  let adtaList: any[] = [];
  list.forEach((v) => {
    if (typeof parents === 'string') {
      if (v[parents]) {
        adtaList = [...adtaList, ...treeToList(v[parents], parents)];
      } else {
        adtaList.push(v);
      }
    } else {
      let isHave = false;
      parents.forEach((parent) => {
        if (v[parent]) {
          adtaList = [...adtaList, ...treeToList(v[parent], parents)];
          isHave = true;
        }
      });
      if (!isHave) {
        adtaList.push(v);
      }
    }
  });
  return adtaList;
};

/**
 * 设置高度
 */
export const setWindowHeight = () => {
  const windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  if (typeof windowWidth !== 'number') {
    if (document.compatMode === 'CSS1Compat') {
      windowHeight = document.documentElement.clientHeight;
    } else {
      // @ts-ignore
      windowHeight = window.body.clientHeight;
    }
  }
  document
    .getElementsByTagName('body')[0]
    .style.setProperty('--height-primary', `${windowHeight}px`);
};

/**
 * 随机颜色
 */

export const randomColor = () => {
  return new Array(7).fill('#').reduce((prev, cur) => {
    return prev + Math.floor(Math.random() * 16).toString(16);
  });
};

/**
 * 防抖
 */

export const debounce = (fn: any, wait: any, time: number) => {
  let previous: any = null; // 记录上一次运行的时间
  let timer: any = null;
  return function () {
    const now = +new Date();
    if (!previous) previous = now;
    // 当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
    if (now - previous > time) {
      clearTimeout(timer);
      fn();
      previous = now; // 执行函数后，马上记录当前时间
    } else {
      // 否则重新开始新一轮的计时
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn();
      }, wait);
    }
  };
};

/**
 * 节流
 */

export const throttle = (fn: any, time: number) => {
  const _self: any = fn;
  let timer: any = null;
  let firstTime = true; // 记录是否是第一次执行的flag

  return function () {
    const args = arguments; // 解决闭包传参问题
    const _me = this; // 解决上下文丢失问题

    if (firstTime) {
      // 若是第一次，则直接执行
      _self.apply(_me, args);
      firstTime = false;
      return;
    }
    if (timer) {
      // 定时器存在，说明有事件监听器在执行，直接返回
      return false;
    }

    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, time || 500);
  };
};

/**
 * 设置粘性tab
 * @bgc 背景颜色
 */

export const setSticky = (dom: HTMLElement, bgc: string, top?: number) => {
  dom.style.backgroundColor = bgc;
  dom.style.position = 'sticky';
  dom.style.top = `${top || 0}px`;
  dom.style.zIndex = '999';
};
