import { Container, Logo, NavBar } from "@components/ui"
import { SearchBar } from "./SearchBar"
import { UserNav } from "./UserNav"
import { Cart } from "./Cart"
import styles from './Header.module.css'

const Header = ({collections}) => {
    return (
        <header className={styles.header} id="header">
            <Container>
                <div className={styles.header_row}>
                    <Logo />
                    <SearchBar />
                    <div className={styles.header_right}>
                        <UserNav />
                        <Cart />
                    </div>
                </div>
                <div className={styles.header_nav}>
                    <NavBar 
                        collections={collections} 
                    />
                </div>
            </Container>
        </header>
    )
}

export default Header