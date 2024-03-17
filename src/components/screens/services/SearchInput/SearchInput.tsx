import styles from './SearchInput.module.scss'

const SearchInput = () => {
    return(
        <div className={styles.container}>
            <input className={styles.input} type="text"/>
        </div>
    )
}

export default SearchInput