import fetcher from '../fetcher'
import {
  checkoutLineItemRemoveMutation,
  getCheckoutId,
  throwUserErrors,
} from '../utils'
import { normalizeCart } from '@shopify/utils/normalize'

type ID = {
    id: string
}

async function useRemoveItem({ id }: ID) {
    try {
        const checkoutId = getCheckoutId()
        const data = await fetcher({
            query: checkoutLineItemRemoveMutation,
            variables: {
                checkoutId,
                lineItemIds: [id]
            }
        })
        const { checkoutUserErrors, checkout } = data?.checkoutLineItemsRemove
        if (checkoutUserErrors && checkoutUserErrors.length > 0) {
            throwUserErrors(checkoutUserErrors)
        }
        return normalizeCart(checkout)
    } catch(err) {
        console.log(err)
    }
}

export default useRemoveItem