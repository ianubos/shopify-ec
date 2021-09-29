import styles from './Contents.module.css'
import React, { useRef, useState, useLayoutEffect } from 'react'
import { Drawer } from '../drawer'
import { HomeAllProductsGrid } from '../homeAllProductsGrid'
import { SideBarLayout } from '../../ui/sidebarLayout'
import { HamburgerMenu } from '../../ui/button/hamburgerMenu'
import { Container } from '../../ui/container'

const Contents = ({products, collections}) => {
    const drawerRef = useRef(null)
    const [values, setValues] = useState(null);

    const handleClickDrawerToggle = () => {
        const drawer = drawerRef.current
        const body = document.body
        drawer.classList.toggle(styles.drawer_open)
        drawer.classList.toggle(styles.drawer_default)
        body.classList.toggle(styles.scroll_stop)
    }

    const handleClickDrawerOpen = () => {
        setValues(() => handleClickDrawerToggle())
    }

    useLayoutEffect(() => {
        drawerRef.current.classList.add(styles.drawer_default)
    }, [])

    return (
        <div className={styles.contents}>
            <Container>
                <Drawer 
                    close={handleClickDrawerOpen}
                    componentChild={collections}
                    ref={drawerRef}
                />
                <HamburgerMenu 
                    open={handleClickDrawerOpen}
                />
                <div className={styles.content_box}>
                    <div className={styles.content_box_aside}>
                        <SideBarLayout 
                            products={products}
                        />
                    </div>
                    <HomeAllProductsGrid 
                        products={products}
                    />
                </div>
            </Container>
        </div>
    )
}

export default Contents