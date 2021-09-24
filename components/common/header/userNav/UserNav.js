import styles from './UserNav.module.css'

const UserNav = () => {
    return (
        <div className={styles.userNav_box}>
            <button className={styles.userNav_icon}>
                <img src="user-circle-2.svg" />
            </button>
        </div>
    )
}

export default UserNav