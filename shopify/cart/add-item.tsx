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

async function addItem({ variantId, quantity }: addInput) {
    try {
        console.log(variantId, quantity)
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
        console.log('data: ',data)
        const { checkoutUserErrors, checkout } = data?.checkoutLineItemsAdd
        if (checkoutUserErrors && checkoutUserErrors.length > 0) {
            throwUserErrors(checkoutUserErrors)
        }
        return normalizeCart(checkout)
    } catch(err) {
        console.log(err)
    }
}

export default addItem

