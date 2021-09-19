/**
 * Return getCartItems, clearCartItems, addCartItem, removeCartItem
 * These functions should be used in react context.
 */

import { LOCAL_STORAGE_NAME } from './const'

type CartItem = {
    id: string
    quantity?: number
}

type CartAction = {
    id?: string
    type: 'GET_ALL' | 'ADD' | 'REMOVE' | 'CLEAR'
}

export const reducer = (cartItems: CartItem[], action: CartAction) => {
    switch (action.type) {
        case 'ADD':
            const add_i = cartItems.findIndex(cartItem => cartItem.id === action.id)
            if (add_i === -1) {
                return cartItems.push({ id: action.id, quantity: 1 })
            }
            cartItems[add_i].quantity++
            saveStorageItems(cartItems)
            return cartItems

        case 'REMOVE':
            const remove_i = cartItems.findIndex(cartItem => cartItem.id === action.id)
            if (remove_i === -1) {
                return cartItems
            }
            cartItems[remove_i].quantity--
            if (cartItems[remove_i].quantity <= 0) { /** If quantity is 0, remove the item */
                cartItems.splice(remove_i, remove_i)
            }
            saveStorageItems(cartItems)
            return cartItems

        case 'CLEAR': // Is it necessary?
            saveStorageItems([])
            return []
        
        default:
            return cartItems
    }
}

/** This would be intitial state. */
export function getStorageItems(): CartItem[] {
    if (typeof window === 'undefined') {
        return []
    }
    const data = window.localStorage.getItem(LOCAL_STORAGE_NAME) ?? null
    if (!data) {
        window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify('[]'))
        return []
    } else {
        return JSON.parse(data)
    }
}

function saveStorageItems(items: CartItem[]): void {
    if (typeof window === 'undefined') {
        return
    }
    window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(items))
}
