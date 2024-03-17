import { FC } from 'react'
import styles from './ProfileItemDate.module.scss'
import { IDateItem } from '@/types/date.interafce'

const ProfileItemDate: FC<IDateItem> = (props) => {
    const {cost, day, master, procedure, time} = props

    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.info}>
                    <div className={styles.procedure}>{procedure}</div>
                    <div className={styles.date_container}>
                        <div className={styles.day}>{day}</div>
                        <div className={styles.date_inner}>
                            <div className={styles.time}>{time}</div>
                            <div className={styles.master}>Мастер {master}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.button_container}>
                    <div className={styles.cost}>{cost} &#x20bd;</div>
                    <button className={styles.button}>Позвонить</button>
                </div>
            </div>
        </div>
    )
}
export default ProfileItemDate