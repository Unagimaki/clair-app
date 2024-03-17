import { FC } from 'react'
import styles from './newsRender.module.scss'

interface props {
    title: string
    text?: string
    image?: string
}

const NewsRender: FC<props> = (props) => {

    const {title, text, image} = props 

    return(
        <div className={styles.container} style={{ backgroundImage: `url(${image})`, }}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <button className={styles.button}>
                        <img src="./images/news/arrow.svg" alt="arrow"/>
                    </button>
                </div>

                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default NewsRender