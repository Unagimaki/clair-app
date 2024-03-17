import { FC } from "react"
import SearchItem from "./SearchItem/SearchItem"
import styles from './SearchResultRender.module.scss'

interface item {
    title: string
}

interface props {
    data: Array<item>
}

const SearchResultRender: FC<props> = (props) => {
    const {data} = props
    return(
        <div className={styles.container}>
            {
                data.map(item => {
                    return(
                        <SearchItem  title={item.title}/>
                    )
                })
            }
        </div>
    )
}

export default SearchResultRender