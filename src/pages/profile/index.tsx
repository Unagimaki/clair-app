import styles from './index.module.scss'
import ProfileInfoContainer from '@/components/screens/profile/profileInfo/ProfileInfoContainer'
import Title from '@/components/UI/title/Title'
import SubTitle from '@/components/UI/subtitle/SubTitle'
import ProfileDatesContainer from '@/components/screens/profile/profileDates/ProfileDatesContainer'
import ShowAll from '@/components/UI/showAll/ShowAll'
import ProfileFavouriteContainer from '@/components/screens/profile/profileFavourite/ProfileFavouriteContainer'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'
import ProfileOrdersContainer from '@/components/screens/profile/profileOrders/ProfileOrdersContainer'
import { ordersData } from '@/data/orders'

const ProfilePage = () => {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <Title title='профиль'/>
                <ProfileInfoContainer/>
                <SubTitle title='Мои записи'/>
                <ProfileDatesContainer/>
                <ShowAll title='Все записи' link='/alldates'/>
                <SubTitle title='Мои покупки'/>
                <ProfileOrdersContainer data={ordersData}/>
                <ShowAll title='Все покупки' link='/allorders'/>
                <SubTitle title='Избранное'/>
                <ProfileFavouriteContainer/>
                <Footer/>
            </div>
        </div>
    )
}

export default ProfilePage