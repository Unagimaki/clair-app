import { IShopItem } from '@/types/shop.interface'
import styles from './ShopRecommendedRender.module.scss'
import { FC } from 'react'
import ShopItem from '../../shopItem/ShopItem'

interface props { data: Array<IShopItem> }

const ShopRecommendedRender: FC<props> = ({data}) => {
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
                                title={item.title}
                                image={item.image}
                                promo={item.promo}
                                addedToCart={item.addedToCart}
                            />    
                        )  
                    })
                }
            </div>
        </div>
    )
}

export default ShopRecommendedRender