/**
 * collection: {
 *  id
 *  title
 *  slug
 *  image
 *  tag
 * }
 */

 import fetcher from '../fetcher'
 import { normalizeProduct } from './normalize'
 import { getCollectionProductsQuery } from './queries' 
 import type { ProductCollection as Collection, Product } from '../types/product'
 
async function getProductsByCollection(
     collectionId: string | number
): Promise<Product[]> {
    const products = await fetcher({ 
            query: getCollectionProductsQuery, 
            variables: { collectionId } 
        })
        .then(res => {
            return res.node.products.edges.map(
                product => normalizeProduct(product.node)
            )
        })
    return products
 }
 
 export default getProductsByCollection