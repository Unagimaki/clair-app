import ShopRender from "../main/shop/shopRender/ShopRender"
import styles from './ShopContainer.module.scss'
import { shopData } from "@/data/shop"


const ShopContainer = () => {
    return(
        <div className={styles.container}>
            <ShopRender data={shopData}/>
            <div className={styles.buttons}>
                <button className={styles.pageButton}>1</button>
                <button className={styles.pageButton}>2</button>
                <button className={styles.pageNext}/>
            </div>
        </div>
    )
}

export default ShopContainer