import { FC } from 'react'
import styles from './ProfileOrdersRender.module.scss'
import { IOrder } from '@/types/order.interface'
import ProfileOrderItem from '../profileOrderItem/ProfileOrderItem'

interface props {
    data: Array<IOrder>
}

const ProfileOrdersRender: FC<props> = ({data}) => {
 
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {
                    data.map(item => {
                        return(
                            <ProfileOrderItem
                                amountPrice={item.amountPrice}
                                delivered={item.delivered}
                                lot={item.lot}
                                products={item.products}
                                key={item.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileOrdersRender