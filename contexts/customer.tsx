import { createContext, useContext, useState, useEffect, FC, useCallback, useMemo, useRef, useReducer } from "react"
import { initialProfile, reducer } from './reducer'

import { shopifyCustomer } from '@shopify/customer'
import { shopifyLogin, shopifyLogout } from '@shopify/auth'

// Prepares the data layer
// export const CartContext = createContext()
// export const CollectionContext = createContext()
const CustomerContext = createContext({})

// Pull information from the data layer
export const useCustomerContext = () => useContext(CustomerContext);

type UserLogin = {
    email: string
    password: string
}

// Wrap the app and provide the data layer to every component
export const CustomerProvider: FC = ({ children }) => {
    /** TODO: Update when user login or logout occurred */
    
    // const initial = useMemo(async () => {
    //     await shopifyCustomer()
    //     isLoading.current = false
    // }, [])
    // const user = useMemo(async () => { 
    //     return new UserState(null)
    // }, [])
    // const memorizedCustomer = useCallback(
    //     async function fetchCustomer() {
    //         await user.fetchData()
    //         isLoading.current = false
    //     }
    // , [user])
    // useEffect(() => {
    //     if (isLoading) {
    //         memorizedCustomer()
    //     }
    // }, [user, isLoading])
 
    // const isLoading = useRef(true)
    // const [profile, setProfile] = useState()
    // async function getProfile(): Promise<void> {
    //     const data = await shopifyCustomer()
    //     setProfile(data)
    //     isLoading.current = false
    // }

    // useEffect(() => {
    //     if (isLoading) {
    //         getProfile()
    //     }
    // }, [profile, isLoading])
    // const user = new UserState(undefined)
    const isLoading = useRef(true)
    const [profile, setProfile] = useState(null)
    async function getProfile(): Promise<void> {
        const data = await shopifyCustomer()
        setProfile(data)
        isLoading.current = false
    }

    useEffect(() => {
        if (isLoading.current) {
            getProfile()
        }
    }, [])
    return (
        <CustomerContext.Provider value={useReducer(reducer, { profile: profile })}>
            {children}
        </CustomerContext.Provider>
    )
}


