import fetcher from '../fetcher'
import { normalizeProduct } from './normalize'
import { getSingleProductQuery } from './queries' 
import type { Product } from '../types/product'

async function getSingleProduct(handle: string): Promise<Product> {
    const product: Product = await fetcher({
        query: getSingleProductQuery,
        variables: { handle }
    })
        .then(res => {
            return normalizeProduct(res.product)
        })
    return product
}

export default getSingleProduct