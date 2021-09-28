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
        const drawerBoolean = drawer.toggleAttribute('id')
        if (drawerBoolean === true) drawer.setAttribute('id', styles.drawer_default)
    }

    const handleClickDrawerOpen = () => {
        setValues(() => handleClickDrawerToggle())
    }

    useLayoutEffect(() => {
        console.log('drawerのテスト')
        console.log(drawerRef.current)
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