import { siedebar } from '@assets/data'
import styles from './SideBarLayout.module.css'

const SideBarLayout = () => {
    return (
        <aside className={styles.side_bar}>
            <nav className={styles.side_bar_nav}> 
                <h5 className={styles.side_bar_heading}>TAGS</h5>
                {siedebar.map((sidebars, index) => (
                    <>
                        <input type="checkbox" id={'tag-check_' + index.toString()} />
                        <label htmlFor={'tag-check_' + index.toString()} key={index.toString()}>
                            <span>{sidebars}</span>
                        </label>
                    </>   
                ))}
            </nav>
        </aside>
    )
}

export default SideBarLayout