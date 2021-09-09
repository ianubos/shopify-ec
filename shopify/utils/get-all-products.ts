import fetcher from '../fetcher'
import { getAllProductsQuery } from './queries' 

async function getAllProducts() {
    const allProducts = await fetcher({query: getAllProductsQuery})
    console.log(allProducts)
    return allProducts
}

export default getAllProducts