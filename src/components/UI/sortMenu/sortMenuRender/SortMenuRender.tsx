import { FC } from 'react'
import styles from './SortMenuRender.module.scss'
import { ISortMenuItem } from '@/types/sortMenu.interface'


const SortMenuRender: FC<ISortMenuItem> = (props) => {
    const {title, selected} = props

    return(
        <div className={selected ? styles.container_selected : styles.container}>
            <div className={styles.title}>{title}</div>            
        </div>
    )
}

export default SortMenuRender