
import { memo, useImperativeHandle, useState, forwardRef, FC } from 'react';
import { ImageViewer } from 'antd-mobile'
import type { MutiPropTypes } from './type'

// 多图预览
let MultiImageViewer: FC<MutiPropTypes> = (props: any, ref: any) => {

    const [visible, setVisible] = useState(props.visiable)
    useImperativeHandle(ref, () => ({
        // set 就是暴露给父组件的方法, newVal是父组件传递的参数
        set: (newVal: boolean) => {
            setVisible(newVal)
        }
    }))
    return (
        <>
            <ImageViewer.Multi
                images={props.list}
                visible={visible}
                defaultIndex={0}
                onClose={() => {
                    setVisible(false)
                }}
            />
        </>
    )
}
MultiImageViewer = forwardRef(MultiImageViewer as any)

export default memo(MultiImageViewer);
