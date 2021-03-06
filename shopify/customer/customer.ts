import { getCustomerQuery, getCustomerToken } from '../utils'
import fetcher from '../fetcher'

async function customer() {
    const customerAccessToken = getCustomerToken()
    if (customerAccessToken) {
        const data = await fetcher({ 
            query: getCustomerQuery,
            variables: {
                customerAccessToken
            } 
        })
        return data.customer
    }
    return null
}

export default customer
