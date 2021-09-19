import { customerCreateMutation } from './mutations'
import fetcher from '../fetcher'
import type { Customer } from '../types/customer'
import throwUserErrors from './throw-user-errors'



async function createCustomer({email, password}): Promise<never | null> {
    const input = {
        "email": email,
        "password": password
    }
    const response: Customer | ErrorMessage = await fetcher({
        query: customerCreateMutation,
        variables: { input }
    })
    console.log('response:', response)
    throwUserErrors(response?.data?.customerCreate?.customerUserErrors)
        // .then(res => {
        //     return responseHandler(res)
        // })
    return null
}

export default createCustomer

/**
 {
    "data": {
        "customerCreate": {
            "customerUserErrors": [
                {
                    "code": "TAKEN",
                    "field": [
                        "input",
                        "email"
                    ],
                    "message": "メール は既に使用されています"
                }
            ],
            "customer": null
        }
    }
}
 */


// function responseHandler(response: {}): ErrorMessage | Customer {
//     /** Return customer id if all ok, else return error message */
//     /** NOTICE! If return code is "CUSTOMER_DISABLED", then warn the customer to activate his/her email. */
//     /** NOTICE! "TAKEN" means email is already used. */

//     if (response?.errors) { // e.g. customer create limitation
//         return { 
//             message: response.errors.message,
//             code: response.errors?.code
//         }
//     }

//     const { customerCreate } = response?.data
//     if (!customerCreate) { 
//         return { 
//             message: 'customerCreate does not exist.', 
//         }
//     }

//     const { customerUserErrors, customer } = customerCreate
//     if (customerUserErrors?.lengh > 0) { // e.g. short password
//         return {
//             message: customerUserErrors
//                 .map(err => err.message)
//                 .join(),
//             code: customerUserErrors
//                 .map(err => err.code)
//                 .join()
//         }
//     }

//     return { id: customer.id }
// }