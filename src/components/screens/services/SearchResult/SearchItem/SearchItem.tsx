import { FC } from 'react'
import styles from './SearchItem.module.scss'

interface props {
    title: string
}

const SearchItem: FC<props> = (props) => {
    const {title} = props
    return(
        <div className={styles.container}>
            {title}
        </div>
    )
}

export default SearchItem