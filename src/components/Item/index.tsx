import { memo } from 'react';
import type { ItemProps } from './type'
import './index.less'

const Item = (props: ItemProps) => {

    return (
        <div className='item_content'>
            {props.type}
        </div >

    );
};

export default memo(Item);
