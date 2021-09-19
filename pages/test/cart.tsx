import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import type { Product } from '@shopify/types/product'
import { getStorageItems, saveStorageItems } from '@shopify/local-storage'

const Cart: NextPage = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const localStorageItems = getStorageItems()
        if (!localStorageItems) {
            return
        }
        setItems(localStorageItems)
    }, [])
    const addItem = (id, quantity) => {
        const 
    }
    return (
        <div className='w-full border border-gray-500 h-full m-8'>
            <h2 className='text-lg underline'>Collections</h2>
            <div>
                {items && items.length > 0 && 
                items.map((item, i) => 
                    <div key={i}>
                        <p>{item.id}</p>
                        <p>{item.quantity}</p>
                    </div>
                )}
            </div>
        </div>
    )
}



export default Cart