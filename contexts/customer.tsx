import { createContext, useContext, useState, useEffect, FC, useCallback, useMemo, useRef } from "react"

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

class UserState {
    profile: any
    constructor(profile) {
        this.profile = profile 
            // ?? async () => await shopifyCustomer()
            ?? null
    }

    isLogin() {
        return this.profile !== null && this.profile !== undefined
    }
    
    async fetchData() {
        await shopifyCustomer()
            .then(data => this.profile = data)
    }

    async login(userLogin: UserLogin) {
        await shopifyLogin(userLogin)
        await this.fetchData()
    }

    async logout() {
        await shopifyLogout()
        this.profile = null
    }
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
    const [profile, setProfile] = useState()
    const isLoading = useRef(true)
    async function getProfile(): Promise<void> {
        const data = await shopifyCustomer()
        const user = new UserState(data)
        setProfile(user)
        isLoading.current = false
    }

    useEffect(() => {
        if (isLoading) {
            getProfile()
        }
    }, [isLoading, profile])

    return (
        <CustomerContext.Provider value={profile}>
            {children}
        </CustomerContext.Provider>
    )
}


