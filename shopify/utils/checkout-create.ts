import Cookies from 'js-cookie'
import fetcher from '../fetcher'

import {
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CHECKOUT_URL_COOKIE,
  SHOPIFY_COOKIE_EXPIRE,
} from '../const'

import checkoutCreateMutation from './mutations/checkout-create'

async function checkoutCreate() {
    const data = await fetcher({ query: checkoutCreateMutation })
    if (data?.errors) {
        console.log(data.errors)
        return
    }
    const checkout = data.checkoutCreate?.checkout
    if (checkout?.id) {
        const options = {
            expires: SHOPIFY_COOKIE_EXPIRE,
        }
        Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkout.id, options)
        Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, checkout.webUrl, options)
    }
    return checkout
}

export default checkoutCreate
