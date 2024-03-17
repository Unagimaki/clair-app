import { FC } from 'react'
import styles from './AllOrdersRender.module.scss'
import { IOrder } from '@/types/order.interface'
import ProfileOrderItem from '../../profileOrders/profileOrderItem/ProfileOrderItem'

interface props { data: Array<IOrder> }

const AllOrdersRender: FC<props> = ({data}) => {
    console.log(data);
    
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.before}>
                    <div className={styles.title}>В процессе</div>
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
                <div className={styles.after}>
                    <div className={styles.title}>Было</div>
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
        </div>
    )

}

export default AllOrdersRender