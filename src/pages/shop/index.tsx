import styles from './index.module.scss'
import Title from '@/components/UI/title/Title'
import ShopContainer from '@/components/screens/shop/ShopContainer'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'
import StoriesContainer from '@/components/UI/stories/StoriesContainer'
import { storiesData } from '@/data/stories'

const ShopPage = () => {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <Title title='магазин'/>
                <StoriesContainer data={storiesData}/>
                <ShopContainer/>
                <Footer/>
            </div>
        </div>
    )
}

export default ShopPage