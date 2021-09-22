import { associateCustomerWithCheckoutMutation, getCustomerToken, getCheckoutId, throwUserErrors } from '../utils'
import fetcher from '../fetcher'

async function associateWithCheckout() {
    const customerAccessToken = getCustomerToken()
    const checkoutId = getCheckoutId()
    if (!customerAccessToken || !checkoutId) {
        return null
    }
    try {
        const data = await fetcher({ 
            query: associateCustomerWithCheckoutMutation,
            variables: {
                checkoutId,
                customerAccessToken
            } 
        })
        const { checkout, customer, checkoutUserErrors } = data
        throwUserErrors(checkoutUserErrors)
        return { checkout, customer }
    } catch(err) {
        console.log(err)
    }
}

export default associateWithCheckout
