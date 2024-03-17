import { IShopItem } from '@/types/shop.interface'
import styles from './ShopCheckedRender.module.scss'
import { FC } from 'react'
import ShopItem from '../../shopItem/ShopItem'

interface props { data: Array<IShopItem> }

const ShopCheckedRender: FC<props> = ({data}) => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {
                    data.map(item => {
                        return(
                            <ShopItem
                                brand={item.brand}
                                cost={item.cost}
                                favourite={item.favourite}
                                image={item.image}
                                promo={item.promo}
                                title={item.title}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopCheckedRender