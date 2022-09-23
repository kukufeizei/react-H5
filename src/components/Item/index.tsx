import { memo } from 'react';
import type { ItemProps } from './type'
import Empty from '@/components/Empty'
import './index.less'


const Item = (props: ItemProps) => {
    return (
        <div className='item_content'>
            {
                props.type === 'reply' ? <Empty /> : <div>{props.type}</div>
            }
        </div>

    );
};
export default memo(Item);
