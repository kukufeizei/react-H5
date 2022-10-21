import { memo, FC } from 'react';
import { NavBar,Space } from 'antd-mobile'
import { MoreOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less'
const Nav: FC = (props) => {
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
        <NavBar onBack={back} right={right}>
            <div className={styles.navbar_}>
                <span className={styles.navbar_text}>分</span>
                分布函数
            </div>
        </NavBar>
    );
};
export default memo(Nav);
