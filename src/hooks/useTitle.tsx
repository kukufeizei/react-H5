import { useEffect, useRef } from 'react';

// 标题hook
const useTitle = (title: string) => {
  const oldTitle = useRef(document.title);
  useEffect(() => {
    document.title = title || oldTitle.current;
  }, [title]);
};

export default useTitle;
