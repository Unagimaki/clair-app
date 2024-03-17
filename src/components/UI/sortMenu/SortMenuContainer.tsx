import { ISortMenuItem } from '@/types/sortMenu.interface'
import styles from './SortMenu.module.scss'
import SortMenuRender from './sortMenuRender/SortMenuRender'
import { FC } from 'react'

interface props { data: Array<ISortMenuItem> }

const SortMenuContainer: FC<props> = ({data}) => {
    return(
        <div className={styles.container}>
            {
                data.map((item, index) => {
                    return <SortMenuRender key={index} title={item.title} selected={item.selected}/>
                })
            }
        </div>
    )
}

export default SortMenuContainer