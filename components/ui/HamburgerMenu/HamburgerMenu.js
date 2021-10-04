import styles from './HamburgerMenu.module.css'
import React from 'react'

const HamburgerMenu = React.forwardRef((props) => {
    const line = () => {
        const items = []
        for (let i = 0; i < 3; i ++) {
            items.push(<span className={styles.line}></span>)
        } return items
    }

    return (
        <div className={styles.menu_container}>
            <div className={styles.hamburger_menu} onClick={props?.open}>
                <div className={styles.hamburger_menu_box}>
                    {line()}
                </div>
            </div>
        </div>
    )
})

export default HamburgerMenu