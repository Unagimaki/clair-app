import { FC } from 'react'
import styles from './NewsRender.module.scss'
import { INewsItem } from '@/types/news.interface'
import NewsItem from '../newsItem/NewsItem'

interface props {
    data: Array<INewsItem>
}

const NewsRender: FC<props> = ({data}) => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                {
                    data.map(item => {
                        return (
                            <NewsItem
                                title={item.title}
                                text={item.text}
                                image={item.image}
                                id={item.id}
                                key={item.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewsRender