import { Header, Footer } from "@components/common";

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