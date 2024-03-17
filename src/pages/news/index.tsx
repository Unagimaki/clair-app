import styles from './index.module.scss'
import SortMenuContainer from '@/components/UI/sortMenu/SortMenuContainer'
import ShowAll from '@/components/UI/showAll/ShowAll'
import Title from '@/components/UI/title/Title'
import NewsContainer from '@/components/screens/news/NewsContainer'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'
import { newsData } from '@/data/sortMenuContainer'
import StoriesContainer from '@/components/UI/stories/StoriesContainer'
import { storiesData } from '@/data/stories'


const NewsPage = () => {
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <Title title='новости'/>
                <StoriesContainer data={storiesData}/>
                <SortMenuContainer data={newsData}/>
                <NewsContainer/>
                <ShowAll title='Посмотреть все'/>
                <Footer/>
            </div>
        </div>
    )
}

export default NewsPage