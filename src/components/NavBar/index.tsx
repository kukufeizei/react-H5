import { memo, FC } from 'react';
import { Grid, Image } from 'antd-mobile'
// import { MoreOutline } from 'antd-mobile-icons'
// import { useNavigate } from 'react-router-dom';
import styles from './index.module.less'
import logo from '@/assets/images/logo.png'

interface NavTitleType {
    title?: string
    type?: string
}

const Nav: FC<NavTitleType> = (props) => {
    // const nav = useNavigate();
    // const back = () => {
    //     nav(-1)
    // }
    // const right = (
    //     <div style={{ fontSize: 24 }}>
    //         <Space style={{ '--gap': '16px' }}>
    //             <MoreOutline />
    //         </Space>
    //     </div>
    // )
    const download = () => {
        
        const ua = navigator.userAgent.toLowerCase();
        // 微信中打开
        // @ts-ignore
        if (ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i) == "micromessenger") {
            window.location.href = "../../../download/index.html";
        }
    }
    return (
        <div className={styles._nav}>
            <Grid columns={18} gap={0}>
                <Grid.Item span={2}>
                    <Image src={logo} width={40} height={40} fit='cover' />
                </Grid.Item>
                <Grid.Item span={13}>
                    <div className={styles.mt}>
                        <div className={styles.title}>搜词APP</div>
                        <div className={styles.desc}>积极回答问题</div>
                    </div>
                </Grid.Item>
                <Grid.Item span={3}>
                    <div className={styles.rightBtn} onClick={() => download()} >
                        <div>
                            打开APP
                        </div>
                    </div>
                </Grid.Item>
            </Grid>
            {/* <NavBar onBack={back} right={right}>
                <div className={props.type !== 'commit' ? styles.navbar_ : ''}>
                    {
                        props.type !== 'commit' && <span className={styles.navbar_text}>{props.title?.charAt(0) || ''}</span>
                    }
                    {props.title}
                </div>
            </NavBar > */}
        </div >
    );
};
export default memo(Nav);
