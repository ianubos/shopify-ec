import { SearchBtn } from '../../../ui/button/search'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={styles.searchBar_container}>
            <div className={styles.searchBar_box}>
                <input type="search" placeholder="検索ストア" />
                <SearchBtn/>
            </div>
        </div>
    )
}

export default SearchBar