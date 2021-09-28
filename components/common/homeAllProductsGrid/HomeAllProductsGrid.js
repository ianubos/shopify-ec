import Link from 'next/link'
import React ,{ useEffect } from 'react'
import styles from './HomeAllProductsGrid.module.css'

const HomeAllProductsGrid = ({products}) => {
    console.log(products)
    
    useEffect(() => {
        
    }, [])

    return (
        <div className={styles.productsGrid_container}>
            {products.map((product, index) => (
                <div className={styles.productsGrid_card}>
                    <Link href={`/product/${product.slug}`}>
                        <a><img src={product.images[0]?.url} /></a>
                    </Link>
                    <div className={styles.productsGrid_item} key={index.toString()}>
                        <h4 className={styles.productsGrid_title}>
                            <Link href={`/product/${product.slug}`}><a>{product.title}</a></Link>
                        </h4>
                        <span className={styles.productsGrid_price}>
                            {product.price.value + ' 円'}        
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeAllProductsGrid