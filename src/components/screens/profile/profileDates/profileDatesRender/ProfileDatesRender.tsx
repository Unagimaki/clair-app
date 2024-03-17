import { FC } from 'react'
import styles from './ProfileDatesRender.module.scss'
import { IDateItem } from '@/types/date.interafce'
import ProfileItemDate from '../profileDateItem/ProfileItemDate'

interface props {
    data: Array<IDateItem>
}

const ProfileDatesRender: FC<props> = ({data}) => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {

                    data.map(item => {
                        return(
                            <ProfileItemDate
                                cost={item.cost}
                                procedure={item.procedure}
                                master={item.master}
                                day={item.day}
                                time={item.time}
                                key={item.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileDatesRender