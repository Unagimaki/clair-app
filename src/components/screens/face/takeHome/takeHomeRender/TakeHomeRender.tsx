import { IShopItem } from '@/types/shop.interface'
import styles from './TakeHomeRender.module.scss'
import { FC } from 'react'
import ShopItem from '@/components/screens/main/shop/shopItem/ShopItem'

interface props {
    data: Array<IShopItem>
}

const TakeHomeRender: FC<props> = ({data}) => {
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
                                key={item.id}
                                addedToCart={item.addedToCart}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TakeHomeRender