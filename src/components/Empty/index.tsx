import { memo } from 'react';
import { ErrorBlock } from 'antd-mobile'
import './index.less'
const EmptyItem = () => {
    return (
        <div className='empty'>
            <ErrorBlock status='empty' />
        </div>

    );
};
export default memo(EmptyItem);
