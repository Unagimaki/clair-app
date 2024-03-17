import { IDateItem } from '@/types/date.interafce'
import styles from './AllDatesRender.module.scss'
import { FC } from 'react'
import AllDatesItem from '../allDatesItem/AllDatesItem'

interface props { data: Array<IDateItem> }

const AllDatesRender: FC<props> = ({data}) => 
{
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.before}>
                    <div className={styles.title}>Будет</div>
                    {
                        data.map(item => {
                            return(
                                <AllDatesItem
                                    cost={item.cost}
                                    day={item.day}
                                    master={item.master}
                                    procedure={item.procedure}
                                    time={item.time}
                                    key={item.id}
                                />
                            )
                        })
                    }
                </div>
                <div className={styles.after}>
                    <div className={styles.title}>Было</div>
                    {
                        data.map(item => {
                            return(
                                <AllDatesItem
                                    cost={item.cost}
                                    day={item.day}
                                    master={item.master}
                                    procedure={item.procedure}
                                    time={item.time}
                                    key={item.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllDatesRender