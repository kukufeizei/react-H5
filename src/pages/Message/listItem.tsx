
import { FC, memo } from 'react';
import { List, Grid, Image } from 'antd-mobile'
import styles from './index.module.less'
import type { PropsTypes } from './type'

const ListItem: FC<PropsTypes> = (props) => {

    return (
        <div className={styles.message}>
            {
                props.Item!.map(item => (
                    <List key={item.source} header={item.source}>
                        {
                            item.items!.map(i => (
                                <List.Item key={i.title} >
                                    <Grid columns={14} gap={8}>
                                        <Grid.Item span={2}>
                                            <div >
                                                <Image
                                                    src={i.icon}
                                                    width={45}
                                                    height={45}
                                                    fit='cover'
                                                    style={{ borderRadius: 32 }}
                                                />
                                            </div>
                                        </Grid.Item>
                                        <Grid.Item span={10}>
                                            <p className={styles.title}>{i.title}</p>
                                            <p className={styles.content}>{i.content}</p>
                                        </Grid.Item>
                                        <Grid.Item span={2}>
                                            <p className={styles.content}>{i.date || ''}</p>
                                        </Grid.Item>
                                    </Grid>
                                </List.Item>
                            ))
                        }
                    </List>
                ))
            }
        </div>
    );
};
export default memo(ListItem);
