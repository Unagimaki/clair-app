import { FC } from 'react'
import styles from './AllDatesItem.module.scss'
import { IDateItem } from '@/types/date.interafce'

const AllDatesItem: FC<IDateItem> = (props) => {
    const {day, cost, master, procedure, time} = props
    return(
        <div className={styles.container}>
            <div className={styles.inner}>

                <div className={styles.info_container}>
                    <div className={styles.procedure}>{procedure}</div>
                    <div className={styles.subtitle}>через 2 часа</div>
                    <div className={styles.date_container}>
                        <div className={styles.date_inner}>
                            <div className={styles.day}>{day}</div>
                            <div className={styles.time}>{time}</div>
                        </div>
                        <div className={styles.adress}>Воронеж, Проспект Революции, д. 9А</div>
                    </div>
                </div>
                <div className={styles.button_container}>
                    <div className={styles.button_container_info}>
                        <div className={styles.cost}>{cost} &#x20bd;</div>
                        <div className={styles.master}>Мастер {master}</div>
                    </div>
                    <button className={styles.button}>Позвонить</button>
                </div>

            </div>
        </div>
    )
}

export default AllDatesItem