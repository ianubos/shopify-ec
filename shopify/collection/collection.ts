import { getCollections } from '../utils'

export default async function collection() {
    const collections = await getCollections()
    return collections
}

