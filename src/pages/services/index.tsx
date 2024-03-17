import styles from './index.module.scss'
import Title from '@/components/UI/title/Title'
import SearchContainer from '@/components/screens/services/SearchContainer/SearchContainer'
import ResultContainer from '@/components/screens/services/ResultContainer/ResultContainer'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'
import StoriesContainer from '@/components/UI/stories/StoriesContainer'
import { storiesData } from '@/data/stories'

const ServicesPage = () => {
    return(
        <section className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <Title title='услуги'/>
                <StoriesContainer data={storiesData}/>
                <div className={styles.search}>
                    <SearchContainer/>
                    <ResultContainer/>
                </div>
                <Footer/>
            </div>
        </section>
    )
}

export default ServicesPage