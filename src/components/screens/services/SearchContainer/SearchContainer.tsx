import SearchInput from '../SearchInput/SearchInput'
import SearchResultContainer from '../SearchResult/SearchResultContainer'
import styles from './SearchContainer.module.scss'
import Filter from '../Filter/Filter'
import FilterMenu from '@/components/UI/filterMenu/FilterMenu'

const SearchContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <SearchInput/>
                <FilterMenu data={[{title: 'Тело'}, {title: 'Волосы'},{title: 'Ногти'},{title: 'Лицо'}]}/>
                <SearchResultContainer/>
            </div>
        </div>
    )
}

export default SearchContainer