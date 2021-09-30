import { Container } from "../../ui/container"
import { Logo } from "../../ui/logo"
import { SearchBar } from "./searchbar"
import { UserNav } from "./userNav"
import { Cart } from "./cart"
import { NavBar } from "../../ui/navBar"
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