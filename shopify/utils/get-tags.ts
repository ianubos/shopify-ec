import fetcher from '../fetcher'
import { getAllCollectionsQuery } from './queries' 
import type { ProductCollection as Collection } from '../types/product'

async function getTags(): Promise<Collection[]> {
    let tags = await fetcher({ query: getAllTagsQuery })
        .then(res => {
            return res.tags.edges.map(
                collection => collection.node
            )
        })
    return tags
}

export default getTags