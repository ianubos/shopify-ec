import { setCustomerToken } from './customer-token'
import { customerAccessTokenCreateMutation } from './mutations'
import throwUserErrors from './throw-user-errors'
import fetcher from '../fetcher'

/**
 * 
{
    "data": {
        "customerAccessTokenCreate": {
            "customerAccessToken": {
                "accessToken": "edc21e0ad6ca3f621f3d388e7c4af98b",
                "expiresAt": "2021-10-28T10:17:41Z"
            },
            "customerUserErrors": []
        }
    }
}
 */

const handleLogin = (data: any) => {
  const response = data.customerAccessTokenCreate
  throwUserErrors(response?.customerUserErrors)

  const customerAccessToken = response?.customerAccessToken
  const accessToken = customerAccessToken?.accessToken

  if (accessToken) {
    setCustomerToken(accessToken)
  }

  return customerAccessToken
}

export const handleAutomaticLogin = async (input) => {
  try {
    const loginData = await fetcher({
      query: customerAccessTokenCreateMutation,
      variables: {
        input,
      },
    })
    handleLogin(loginData)
  } catch (error) {}
}

export default handleLogin
