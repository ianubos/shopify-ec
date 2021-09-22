import { getSingleProduct } from '../utils'
import { Product } from '@shopify/types/product'

export default async function singleProduct(
    handle: string
): Promise<Product> {
    return await getSingleProduct(handle)
}
