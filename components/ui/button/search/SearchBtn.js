import styles from './SearchBtn.module.css'

const SearchBtn = () => {
    return (
        <button className={styles.search_btn}>
            <img src="search_icon.svg" />
        </button>
    )
}

export default SearchBtn