import AllDatesContainer from '@/components/screens/profile/allDates/AllDatesContainer'
import styles from './index.module.scss'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'
import Title from '@/components/UI/title/Title'
import { datesData } from '@/data/dates'
import BackButton from '@/components/UI/backButton/BackButton'

const AllDates = () => {
    return(
        <div  className={styles.screen}>
            <div className={styles.container}>
                <Header/>
                <BackButton/>
                <Title title='все записи'/>
                <AllDatesContainer data={datesData}/>
                <Footer/>
            </div>
        </div>
    )
}

export default AllDates