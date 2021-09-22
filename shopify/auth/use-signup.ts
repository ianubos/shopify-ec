import {
  handleAutomaticLogin,
  throwUserErrors,
} from '../utils'
import fetcher from '../fetcher'
// import type { Customer } from '../types/customer'
import { customerCreateMutation } from '../utils/mutations'

type SignUpInput = {
    email: string
    password: string
}

// type ErrorMessage = {
//     message: string
//     code?: string
// }

export default async function useSignup(input: SignUpInput) {
    try {
        await fetcher({
            query: customerCreateMutation,
            variables: { input }
        })
        .then(async (res: {}) => {
            console.log('response:', res)
            const { customerCreate } = res.data
            throwUserErrors(customerCreate?.customerUserErrors)
            if (customerCreate.customer) {
                await handleAutomaticLogin(input)
                return true
            }
        })
    } catch(err) {
        const { errors } = err
        if (errors) {
            /** TODO: handle error */
            errors.forEach(e => {
                console.log(e.code, e.message)
            })
        } else {
            console.log(err)
        }
    }
}

