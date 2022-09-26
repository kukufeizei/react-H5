import { memo } from 'react';
import { ErrorBlock } from 'antd-mobile'
import './index.less'
import type { EmptyTypes } from './type'
const EmptyItem = (props: EmptyTypes) => {
    return (
        <div className='item_content empty'>
            <ErrorBlock status={props.status} />
        </div >
    );
};
export default memo(EmptyItem);
