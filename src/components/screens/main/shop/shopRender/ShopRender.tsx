import { FC } from 'react'
import styles from './ShopRender.module.scss'
import ShopItem from '../shopItem/ShopItem'
import { IShopItem } from '@/types/shop.interface'

interface props {
    data: Array<IShopItem>
}

const ShopRender: FC<props> = (props) => {
    const {data} = props   
    
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
            {
                data.map(item => {
                    return(
                        <ShopItem
                            title={item.title}
                            cost={item.cost}
                            brand={item.brand}
                            promo={item.promo}
                            key={item.id}
                            image={item.image}
                            favourite={item.favourite}
                            addedToCart={item.addedToCart}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}
export default ShopRender