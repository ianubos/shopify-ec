import { shopifyCustomer } from '@shopify/customer'
import { shopifyLogin, shopifyLogout } from '@shopify/auth'

export const initialProfile = {
    profile: null,
}

export const reducer = async (state, action) => {
    switch(action.type) {
        case 'FETCH':
            const dataFetch = await shopifyCustomer()
            // console.log(dataFetch)
            return {
                ...state,
                profile: dataFetch,
            }
        case 'LOGIN':
            await shopifyLogin(action.input)
            const dataLogin = await shopifyCustomer()
            return {
                ...state,
                profile: dataLogin,
            }
        case 'LOGOUT':
            await shopifyLogout()
            return {
                ...state,
                profile: null
            }
        default:
            return state;
    }

}
