import { FC } from 'react'
import styles from './ProfileOrderItem.module.scss'
import { IOrder } from '@/types/order.interface'

 
const ProfileOrderItem: FC<IOrder> = (props) => {
    const {amountPrice, delivered, lot, products} = props
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.info_container}>
                    <div className={styles.delivered_date}>Доставлен {delivered}</div>
                    <div className={styles.lot_amount}>{lot} товара(-ов)</div>
                    <div className={styles.products_container}>
                        {
                            products.map(item => {                                                              
                                return(
                                    <img className={styles.product_image} src={item.image} alt={item.title} key={item.id}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.button_container}>
                    <div className={styles.amount_price}>{amountPrice} &#x20bd;</div>
                    <button className={styles.more_button}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileOrderItem