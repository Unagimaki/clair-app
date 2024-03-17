import { FC } from 'react'
import styles from './StoriesItem.module.scss'

interface props {
    title: string
    background?: string
    index: number
    storiesHandler: () => void
    storiesSelect: (index: number) => void

}

const StoriesItem: FC<props> = ({title, background, storiesHandler, storiesSelect, index}) => {   
    return(
        <div onClick={() => {storiesHandler(), storiesSelect(index)}} className={styles.container}>
            <img src={background} className={styles.header}/>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default StoriesItem