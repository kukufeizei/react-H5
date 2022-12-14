import { FC, memo } from 'react';
import './index.less';

export interface LoadingViewProps {
  className?: string;
  style?: string;
  height?: number;
  width?: number;
  isPage?: boolean;
}
// 加载组件
const LoadingView: FC<LoadingViewProps> = ({
  className,
  width,
  height,
  isPage,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center fullBody ${
        className ?? (isPage && 'page_loading_body')
      }`}>
      <div
        className="la-square-jelly-box"
        style={{ height: height ?? 30, width: width ?? 30 }}>
        <div />
        <div />
      </div>
    </div>
  );
};
export default memo(LoadingView);
