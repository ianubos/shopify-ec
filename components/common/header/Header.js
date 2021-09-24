import { Container } from "../../ui/container"
import { Logo } from "../../ui/logo"
import { SearchBar } from "./searchbar"
import { UserNav } from "./userNav"
import { Cart } from "./cart"
import { NavBar } from "./navBar"
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_row}>
                    <Logo />
                    <SearchBar />
                    <div className={styles.header_right}>
                        <UserNav />
                        <Cart />
                    </div>
                </div>
                {/* <NavBar /> */}
            </Container>
            <NavBar />
        </header>
    )
}

export default Header