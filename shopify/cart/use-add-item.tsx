import fetcher from '../fetcher'

import {
  checkoutLineItemAddMutation,
  getCheckoutId,
  throwUserErrors,
} from '../utils'
import { normalizeCart } from '@shopify/utils/normalize'

type addInput = {
    variantId: string
    quantity: number
}

async function useAddItem({ variantId, quantity }: addInput) {
    try {
        const checkoutId = getCheckoutId()
        const data = await fetcher({
            query: checkoutLineItemAddMutation,
            variables: {
                checkoutId,
                lineItems: [{
                    variantId,
                    quantity
                }]
            }
        })
        const { checkoutUserErrors, checkout } = data?.checkoutLineItemsAdd
        if (checkoutUserErrors && checkoutUserErrors.length > 0) {
            throwUserErrors(checkoutUserErrors)
        }
        return normalizeCart(checkout)
    } catch(err) {
        console.log(err)
    }
}

export default useAddItem

