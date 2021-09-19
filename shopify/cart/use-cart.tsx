import { checkoutCreate, getCheckoutId } from '../utils'
import fetcher from '../fetcher'
import getCheckoutQuery from '../utils/queries/get-checkout-query'
import { normalizeCart } from '../utils/normalize'
import { throwUserErrors } from '../utils'

async function useCart(id?: string) {
    /** Load when the website is loaded! So, use it inside _app or _document. */
    try {
        const checkoutId = getCheckoutId(id ?? undefined)
    
        let checkout = null
        if (checkoutId) {
            const data = await fetcher({
                query: getCheckoutQuery, 
                variables: {
                    checkoutId
                } 
            })
            throwUserErrors(data?.errors)
            checkout = data.node
        }
        
        /** Create new checkout on shopify */
        if (checkout?.completedAt || !checkoutId) {
            const data = await checkoutCreate()
            throwUserErrors(data?.errors)
            checkout = data.checkoutCreate.checkout
        }
    
        /** TODO: Check checkout variable before normalize. */
        return normalizeCart(checkout)
    } catch(err) {
        console.log(err)
    }
}

export default useCart

