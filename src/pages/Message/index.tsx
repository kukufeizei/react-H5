
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
const List: FC = () => {
  const nva = useNavigate();
  return (
    <div>
      <button onClick={() => { nva('/other') }}>
        去oher
      </button>
    </div>
  );
};
export default memo(List);
