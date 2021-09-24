import styles from './NavBar.module.css'
import Link from 'next/link'
import { globalNav } from '../../../data/data'
import { Container } from '../../../ui/container'

const NavBar = () => {
    return (
        <div className={styles.header_nav}>
            <Container>
                <nav className={styles.global_nav}>
                    <ul className={styles.nav_list}>
                        {globalNav.map((nav, index) => (
                            <li key={index.toString()}>
                                <Link href={nav.url}><a>{nav.text}</a></Link>
                            </li>
                        ))}
                    </ul>
                </nav>  
            </Container>
        </div>
    )
}

export default NavBar