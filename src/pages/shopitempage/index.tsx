import Footer from '@/components/UI/footer/Footer'
import styles from './index.module.scss'
import Header from '@/components/UI/header/Header'
import ShopItemPageContainer from '@/components/screens/main/shop/shopItemPage/ShopItemPageContainer'
import SubTitle from '@/components/UI/subtitle/SubTitle'
import { shopData } from '@/data/shop'
import ShopRecommendedContainer from '@/components/screens/main/shop/shopRecommend/ShopRecommendContainer'
import ShopCheckedContainer from '@/components/screens/main/shop/shopChecked/ShopCheckedContainer'

const ShopItemPage = () => {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <ShopItemPageContainer/>
                <SubTitle title='Рекомендации'/>
                <ShopRecommendedContainer data={shopData}/>
                <SubTitle title='Просмотрено'/>
                <ShopCheckedContainer data={shopData}/>
                <Footer/>
            </div>
        </div>
    )
}

export default ShopItemPage