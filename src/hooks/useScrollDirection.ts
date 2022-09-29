import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [isScrollToTop, setScrollToTop] = useState(false);

  const handleMouseScroll = (e: any) => {
    console.log(e.deltaY);
    setScrollToTop(e.deltaY > 0);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleMouseScroll);
  }, []);

  return {
    isScrollToTop,
  };
};
export default useScrollDirection;
