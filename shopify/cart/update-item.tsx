import fetcher from '../fetcher'
import {
  getCheckoutId,
  checkoutLineItemUpdateMutation,
  throwUserErrors,
} from '../utils'
import { normalizeCart } from '@shopify/utils/normalize'

type updateInput = {
    id: string,
    quantity: number
}

async function updateItem({ id, quantity, variantId }: updateInput) {
    try {
        const checkoutId = getCheckoutId()
        const data = await fetcher({
            query: checkoutLineItemUpdateMutation,
            variables: {
                checkoutId,
                lineItems: [{
                    id,
                    variantId,
                    quantity
                }]
            }
        })
        console.log(data)
        const { checkoutUserErrors, checkout } = data?.checkoutLineItemsUpdate
        if (checkoutUserErrors && checkoutUserErrors.length > 0) {
            throwUserErrors(checkoutUserErrors)
        }
        return normalizeCart(checkout)
    } catch(err) {
        console.log(err)
    }
}


export default updateItem
