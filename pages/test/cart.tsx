import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useCart, useAddItem } from '@shopify/cart'
import { getAllProducts } from '@shopify/utils'

const Cart: NextPage = () => {
    const [products, setProducts] = useState([])
    const [items, setItems] = useState([])
    const [cart, setCart] = useState(null)

    async function getProducts() {
        const fetchedProducts = await getAllProducts()
        setProducts(fetchedProducts)
    }

    async function getCart() {
        const data = await useCart()
        setCart({
            id: data?.id,
            webUrl: data?.webUrl
        })
        setItems(data.lineItems)
    }

    async function addToCart({id, num}) {
        const fetchedNewCart = await useAddItem({
            variantId: id,
            quantity: num
        })
        setItems(fetchedNewCart.lineItems)
    }

    async function clear() {
        alert('coming soon...')
    }

    useEffect(() => {
        getProducts()
        getCart()
    }, [])

    return (
        <div className='w-full border border-gray-500 h-full p-8'>
            <section className='border border-gray-900 p-4'>
                <h2 className='text-lg underline'>Cart Items</h2>
                <div>
                    {items && items.map((item, i) => {
                        return (
                            <div key={i} className='flex w-96 justify-between'>
                                <p>name: {item.title}</p>
                                <p>quantity: {item.quantity}</p>
                            </div>
                        )})
                    }
                </div>
                <button 
                    className='bg-gray-900 px-4 text-white m-4'
                    onClick={() => clear()}
                >Clear</button>
            </section>
            {
                (products && products?.length > 0) && 
                products.map((product: [], index: number) => 
                    <div key={index} className='flex flex-col m-4 border-b border-gray-900 mb-4'>
                        <p>item: {product.title}</p>
                        <p>price: {product.price.value} {product.price.currencyCode}</p>
                        <p>variantId: {product.variantId}</p>
                        <div className='m-4'>
                            <button className='bg-gray-900 text-white px-4' onClick={() => addToCart({id: product.variantId, num: 1})}>Add this item</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}



export default Cart