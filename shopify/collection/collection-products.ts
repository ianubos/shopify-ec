import { getProductsByCollection } from '../utils'

export default async function collectionProducts(id) {
    const products = await getProductsByCollection(id)
    return products
}
