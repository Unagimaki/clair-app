import Header from '@/components/UI/header/Header'
import styles from './index.module.scss'
import Footer from '@/components/UI/footer/Footer'
import BackButton from '@/components/UI/backButton/BackButton'
import Title from '@/components/UI/title/Title'
import AllOrdersContainer from '@/components/screens/profile/allOrders/AllOrdersContainer'
import { ordersData } from '@/data/orders'

const AllOrders = () => {
    return(
        <div className={styles.screen}>
            <div className={styles.container}>
                <Header/>
                <BackButton/>
                <Title title='мои заказы'/>
                <AllOrdersContainer data={ordersData}/>
                <Footer/>
            </div>
        </div>
    )
}

export default AllOrders