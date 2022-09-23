
import { memo, useEffect } from 'react';
// import { getList } from '@/api/route'
import './index.less'

const Home = () => {
  // getList('1231231').then(res => {

  // })

  useEffect(() => {

  }, [])


  return (
    <div>
      <div className="bg-red-500 hover:bg-blue-400 ">
        <span className="test-size">Home哈哈哈niubi wo 我真无语子</span>
      </div>
    </div >
  );
};
export default memo(Home);
