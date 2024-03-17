import styles from './NewsContainer.module.scss'
import NewsRender from './newsRender/NewsRender'

interface newsItem {
    title: string
    image: string
    text?: string
}

const newsData: newsItem[] = [
    {
        title: 'Этой весной Clair исполняется 15 лет!',
        text: 'За эти годы в наших салонах случилось больше магии, чем в самом Хогвартсе, и мы решили, что одного дня будет совсем недостаточно, чтобы отпраздновать событие такого масштаба!  Поэтому на этот раз мы подготовили для тебя целый марафон дней любимых брендов',
        image: './images/news/1.png'
    },
    {
        title: 'Новинки для лица',
        image: './images/news/2.png'
    },
    {
        title: 'Большой книжный фестиваль «Фонарь»',
        image: './images/news/3.png'
    },
]

const NewsContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {
                    newsData.map((item, index) => {
                        return(
                            <NewsRender
                                title={item.title}
                                text={item.text}
                                image={item.image}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewsContainer