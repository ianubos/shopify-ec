import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useCart, useAddItem, useRemoveItem, useUpdateItem } from '@shopify/cart'
import { getAllProducts } from '@shopify/utils'

type CartInputType = {
    id?: string,
    variantId?: string,
    quantity?: number
}

const Cart: NextPage = () => {
    /** TODO: This page should be turned into react context provider! */
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

    async function addToCart({ variantId, quantity }: CartInputType) {
        console.log('addToCart quantity:', quantity)
        const newCart = await useAddItem({
            variantId,
            quantity
        })
        setItems(newCart.lineItems)
    }

    async function popFromCart({ id, quantity, variantId }: CartInputType) {
        if (quantity <= 1) {
            console.log('remove!!')
            // await removeFromCart({id})
            const newCart = await useRemoveItem({
                id,
            })
            setItems(newCart.lineItems)
        } else {
            const newCart = await useUpdateItem({
                id,
                variantId,
                quantity: quantity - 1
            })
            if (newCart?.lineItems) {
                setItems(newCart.lineItems)
            }
        }
    }

    async function updateItemInCart({ id, quantity }: CartInputType) {
        const newCart = await useUpdateItem({
            id,
            quantity
        })
        setItems(newCart.lineItems)
    }

    async function removeFromCart({ id }: CartInputType) {
        const newCart = await useRemoveItem({
            id,
        })
        setItems(newCart.lineItems)
    }

    async function proceedToCheckout() {
        console.log(cart?.webUrl)
    }

    useEffect(() => {
        getProducts()
        getCart()
    }, [])

    return (
        <div className='w-full border border-gray-500 h-full p-8'>
            <section className='border border-gray-900 p-4 flex flex-col'>
                <h2 className='text-lg underline'>Cart Items</h2>
                <div>
                    {items && items.map((item, i) => {
                        return (
                            <div key={i} className='flex justify-between' style={{width: 700}}>
                                <p>name: {item.title}</p>
                                <p>quantity: {item.quantity}</p>
                                <div className='m-4'>
                                    <button 
                                        className='bg-gray-900 text-white px-4 mr-1' 
                                        onClick={
                                            () => addToCart({
                                                variantId: item.variantId, 
                                                quantity: 1
                                            })
                                        }
                                    >+</button>
                                    <button 
                                        className='bg-gray-900 text-white px-4' 
                                        onClick={
                                            () => popFromCart({ id: item.id, variantId: item.variantId, quantity: item.quantity })
                                        }
                                    >-</button>
                                    <button 
                                        className='bg-gray-900 text-white px-4 ml-6' 
                                        onClick={
                                            () => removeFromCart({ id: item.id })
                                        }
                                    >remove</button>
                                </div>
                            </div>
                        )})
                    }
                </div>
                <a href={cart?.webUrl}><button 
                    className='bg-gray-900 px-4 text-white m-4 w-56 p-2'
                    onClick={() => proceedToCheckout()}
                >Proceed To Checkout</button></a>
            </section>
            {
                (products && products?.length > 0) && 
                products.map((product: [], index: number) => 
                    <div key={index} className='flex flex-col m-4 border-b border-gray-900 mb-4'>
                        <p>item: {product.title}</p>
                        <p>price: {product.price.value} {product.price.currencyCode}</p>
                        <p>variantId: {product.variantId}</p>
                        <div className='m-4'>
                            <button className='bg-gray-900 text-white px-4' onClick={() => addToCart({variantId: product.variantId, quantity: 1})}>Add this item</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}



export default Cart