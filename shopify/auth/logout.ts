import customerAccessTokenDeleteMutation from '../utils/mutations/customer-access-token-delete'
import { getCustomerToken, setCustomerToken } from '../utils/customer-token'
import fetcher from '../fetcher'

export default async function logout() {
    await fetcher({
        query: customerAccessTokenDeleteMutation,
        variables: {
            customerAccessToken: getCustomerToken()
        }
    })
    setCustomerToken(null)
}
