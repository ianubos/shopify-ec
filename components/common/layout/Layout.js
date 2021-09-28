import { Header } from "../header";
import { Footer } from "../footer";

const Layout = ({children, collections}) => {
    return (
        <>
            <Header collections={collections} />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Layout