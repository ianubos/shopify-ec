import fetcher from '../fetcher'
import { normalizeProduct } from './normalize'
import { getSingleProductQuery } from './queries' 
import type { Product } from '../types/product'

async function getSingleProduct(): Promise<Product> {
    const product: Product = await fetcher({query: getSingleProductQuery})
        .then(res => normalizeProduct(res.product))
    return product
}

export default getSingleProduct