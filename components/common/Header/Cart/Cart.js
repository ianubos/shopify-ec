import styles from './Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.cart_box}>
            <button className={styles.cart_icon}>
                <img src="cart_icon.svg" />
            </button>
        </div>
    )
}

export default Cart