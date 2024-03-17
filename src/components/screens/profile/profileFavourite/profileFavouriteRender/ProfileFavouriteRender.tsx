import { FC } from 'react'
import styles from './ProfileFavouriteRender.module.scss'
import { IShopItem } from '@/types/shop.interface'
import ShopItem from '@/components/screens/main/shop/shopItem/ShopItem'

interface props {
    data: Array<IShopItem>
}

const ProfileFavouriteRender: FC<props> = ({data}) => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {
                    data.map(item => {
                        return(
                            <ShopItem 
                                brand={item.brand}
                                cost={item.cost}
                                image={item.image}
                                promo={item.promo}
                                title={item.title}
                                favourite={item.favourite}
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

export default ProfileFavouriteRender