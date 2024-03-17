import styles from './MainScreen.module.scss'
import Services from '@/components/screens/main/services/Services'
import Title from '@/components/UI/title/Title'
import ShowAll from '@/components/UI/showAll/ShowAll'
import SortMenuContainer from '@/components/UI/sortMenu/SortMenuContainer'
import MasterContainer from './masters/MastersContainer'
import NewsContainer from './news/NewsContainer'
import SalonContainer from './salon/SalonContainer'
import Download from './download/Download'
import ShopContainer from './shop/ShopContainer'
import Header from '@/components/UI/header/Header'
import Footer from '@/components/UI/footer/Footer'
import { mainDataMasters, mainDataShop } from '@/data/sortMenuContainer'
import StoriesContainer from '@/components/UI/stories/StoriesContainer'
import { storiesData } from '@/data/stories'
import { useState } from 'react'
import StoriesShowContainer from '@/components/UI/storiesShow/StoriesShowContainer'

const MainScreen = () => {
    const [storiesShow, setStoriesShow] = useState(false)
	const [current, setCurrent] = useState(0)

	const storiesHandler = () => {		
        setStoriesShow(!storiesShow)
    }
	const storiesSelect = (index: number) => {
		setCurrent(index)
	}
	return(
		<section className={styles.screen}>
			<div className={styles.container}>

				<Header/>
				<h1 className={styles.title}>Сегодня ты <br/>
					<text className={styles.title_text}>прекрасна</text>
				</h1>

				<StoriesContainer storiesSelect={storiesSelect} storiesHandler={storiesHandler}  data={storiesData}/>
				{
					storiesShow && <StoriesShowContainer
			          data={storiesData}
					  storiesHandler={storiesHandler}
					  current={current}
					/>
				}

				<Download/>
				<Title title='услуги'/>
				<Services/>
				<ShowAll title='Все услуги' link='/services'/>

				<div className={styles.sortContainer}>
					<Title title='магазин'/>
					<SortMenuContainer data={mainDataShop}/>
				</div>
				<ShopContainer/>
				<ShowAll title='Посмотреть магазин' link='/shop'/>

				<div className={styles.sortContainer}>
					<Title title='мастера'/>
					<SortMenuContainer data={mainDataMasters}/>
				</div>

				<MasterContainer/>
				<ShowAll title='Все мастера' link='/masters'/>

				<div className={styles.text}>
					Мы создаем  <span>уникальный</span>  опыт, который оставляет  <span>лучшие</span> воспоминания
				</div>

				<Title title='новости'/>
				<NewsContainer/>
				<ShowAll title='Все новости' link='/news'/>
				<Title title='салоны'/>
				<SalonContainer/>
				<Footer/>

			</div>
		</section>
	)
}

export default MainScreen