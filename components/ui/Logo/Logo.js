import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = () => {
    return (    
        <div className={styles.logo_container}>
            <Link href="/">
                <a className={styles.logo}>Gutenberg</a>
            </Link>
        </div>
    )
}

export default Logo