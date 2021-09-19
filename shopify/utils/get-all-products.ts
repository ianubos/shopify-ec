import fetcher from '../fetcher'
import { normalizeProduct } from './normalize'
import { getAllProductsQuery } from './queries' 
import type { Product } from '../types/product'

async function getAllProducts(): Promise<Product[]> {
    const allProducts: Product[] = await fetcher({query: getAllProductsQuery})
        .then(res => {
            return res.products.edges.map(
                product => normalizeProduct(product.node)
            )
        })
    return allProducts
}

export default getAllProducts