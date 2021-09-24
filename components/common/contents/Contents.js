import styles from './Contents.module.css'
import { HomeAllProductsGrid } from '../homeAllProductsGrid'
import { SideBarLayout } from '../sidebarLayout'
import { Container } from '../../ui/container'

const Contents = ({products}) => {
    return (
        <div className={styles.contents}>
            <Container>
                <div className={styles.content_box}>
                    <SideBarLayout 
                        products={products}
                    />
                    <HomeAllProductsGrid 
                        products={products}
                    />
                </div>
            </Container>
        </div>
    )
}

export default Contents