import styles from './NavBar.module.css'
import Link from 'next/link'

const NavBar = ({collections}) => {
    return (
        <div className={styles.nav_bar}>
            <nav className={styles.global_nav}>
                <ul className={styles.nav_list}>
                    {collections.map((collection, index) => (
                        <li key={index.toString()}>
                            <Link href={`/product/${collection?.slug}`}>
                                <a>{collection?.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>  
        </div>
    )
}

export default NavBar