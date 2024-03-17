import { FC, useState } from 'react'
import styles from './NewsItem.module.scss'
import { INewsItem } from '@/types/news.interface'

const NewsItem: FC<INewsItem> = (props) => {

    const {text, title, image} = props
    const [isOpen, setIsOpen] = useState(false)

    const openHandler = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className={styles.container} style={{gridRow: `${image ? 'span 3' : 'span 1'}`, maxHeight: `${image ? '1126px' : '410px'}`}}>
            <div className={styles.inner}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
                <button onClick={openHandler} className={styles.button}>Читать</button>
                <div className={styles.image}>
                    {
                        image && <img src={image} alt="image" />
                    }                    
                </div>
            </div>
        </div>
    )
}

export default NewsItem