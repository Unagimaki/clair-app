import styles from './index.module.scss'
import Title from '@/components/UI/title/Title'
import SearchContainer from '@/components/screens/services/SearchContainer/SearchContainer'
import ResultContainer from '@/components/screens/masters/resultContainer/ResultContainer'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'

const MastersPage = () => {
    return(
        <section className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <Title title='мастера'/>
                <div className={styles.search}>
                    <SearchContainer/>
                    <ResultContainer/>
                </div>
                <Footer/>
            </div>
        </section>
    )
}

export default MastersPage