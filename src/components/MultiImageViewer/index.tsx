
import { memo, useImperativeHandle, useState, forwardRef, FC, useEffect } from 'react';
import { ImageViewer } from 'antd-mobile'
import { useAliOssSystem } from '@/hooks/useAliOssSystem';
import type { MutiPropTypes } from './type'

// 多图预览
let MultiImageViewer: FC<MutiPropTypes> = (props: any, ref: any) => {

    const [visible, setVisible] = useState(props.visiable)
    const [list, setList] = useState([])
    const { getRealImgUrl } = useAliOssSystem();


    useEffect(() => {
        const myList: any = []
        props.list.forEach((item: any) => {
            myList.push(getRealImgUrl(item as string))
        })

        setList(myList)

    }, [])
    useImperativeHandle(ref, () => ({
        // set 就是暴露给父组件的方法, newVal是父组件传递的参数
        set: (newVal: boolean) => {
            setVisible(newVal)
        },
    }))

    return (
        <>
            <ImageViewer.Multi
                images={list}
                visible={visible}
                defaultIndex={props.defaultIndex || 0}
                onClose={() => {
                    setVisible(false)
                }}
            />
        </>
    )
}
MultiImageViewer = forwardRef(MultiImageViewer as any)

export default memo(MultiImageViewer);
