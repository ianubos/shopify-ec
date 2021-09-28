import styles from './Drawer.module.css'
import React from 'react'
import { SideBarLayout } from '../../ui/sidebarLayout'
import { NavBar } from '../../ui/navBar'

const Drawer = React.forwardRef((props, ref) => {
    const components = [
        {
            childComponent: <SideBarLayout />,
            title: '',
            id: 1, 
        },
        {
            childComponent: <NavBar collections={props.componentChild} />,
            title: 'Collections',
            id: 2, 
        }
    ]
    return (
        <div className={styles.drawer_box} ref={ref}>
            <div className={styles.drawer}>
                {components.map((component) => (
                    <div className={styles.drawer_contents} key={component.id.toString()}>
                        <h5 className={styles.contents_headding}>{component.title}</h5> 
                        {component.childComponent}
                    </div> 
                ))}
            </div>
            <div className={styles.drawer_container} onClick={props?.close} />
        </div>
    )
})

export default Drawer