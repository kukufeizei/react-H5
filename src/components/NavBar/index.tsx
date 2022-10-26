import { memo, FC } from 'react';
import { NavBar, Space } from 'antd-mobile'
import { MoreOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less'

interface NavTitleType {
    title?: string
}

const Nav: FC<NavTitleType> = (props) => {
    const nav = useNavigate();
    const back = () => {
        nav(-1)
    }
    const right = (
        <div style={{ fontSize: 24 }}>
            <Space style={{ '--gap': '16px' }}>
                <MoreOutline />
            </Space>
        </div>
    )
    return (
        <div className={styles._nav}>
            <NavBar onBack={back} right={right}>
                <div className={styles.navbar_}>
                    <span className={styles.navbar_text}>{props.title?.charAt(0) || ''}</span>
                    {props.title}
                </div>
            </NavBar>
        </div>
    );
};
export default memo(Nav);
