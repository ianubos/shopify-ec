import { Container, Logo } from '@components/ui'
import styles from './Footer.module.css'

const Fotoer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_row}>
                    <Logo />
                </div>
            </Container>
        </footer>
    )
}

export default Fotoer