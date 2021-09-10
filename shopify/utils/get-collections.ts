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
import { normalizeCollection } from './normalize'
import { getAllCollectionsQuery } from './queries' 
import type { ProductCollection as Collection } from '../types/product'

async function getCollections(): Promise<Collection[]> {
    let collections = await fetcher({ query: getAllCollectionsQuery })
        .then(res => {
            return res.collections.edges.map(
                collection => normalizeCollection(collection.node)
            )
        })
    return collections
}

export default getCollections