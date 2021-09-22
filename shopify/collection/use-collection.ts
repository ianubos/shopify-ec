import { getCollections, getProductsByCollection } from '../utils'

export async function useCollection() {
    const collections = await getCollections()
    return collections
}

export async function useCollectionProduct(id) {
    const products = await getProductsByCollection(id)
    return products
}

