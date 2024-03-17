import { FC, useEffect, useState } from 'react'
import styles from './ShopItem.module.scss'
import { IShopItem } from '@/types/shop.interface'
import Link from 'next/link'

const ShopItem: FC<IShopItem> = (props) => {
    const [windowWidth, setWindowWidth] = useState(false)
    const [isAdded, setIsAdded] = useState(false)
    const {title, brand, cost, promo, image, addedToCart} = props

    useEffect(() => {
        window.innerWidth <= 374 ? setWindowWidth(true) : setWindowWidth(false)
        window.addEventListener('resize', () => {
            window.innerWidth <= 374 ? setWindowWidth(true) : setWindowWidth(false)           
        })
    }, [])

    const addToCart = () => {
        setIsAdded(!isAdded)

        // some logic here
    }

    return(
        <Link href='/shopitempage'>
            <div className={styles.container} style={{ width: `${promo && !windowWidth ? 'min(37.57vw, 525px) ' : windowWidth ? 'min(94.92vw, 340px)' : 'min(18.29vw, 256px)'}`}}>
                <div className={styles.inner}>
                    <div className={styles.title_container}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.subtitle}>{brand}</div>
                    </div>
                    <div className={styles.image}>
                        <img src={image} alt="item"/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.price}>{cost} &#x20bd;</div>
                        <button onClick={addToCart} className={styles.cart_btn}
                            style={{backgroundImage: `url(./images/shop/${addedToCart ? 'cart_icon-added' : 'cart_icon'}.svg)`,
                            backgroundPositionX: `${addedToCart ? '94%' : '6%'}`,
                            backgroundColor: `${addedToCart ? '#000' : '#fff'}`
                        }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ShopItem