import { productConnectionFragment } from './get-all-products-query'

const getCollectionProductsQuery = /* GraphQL */ `
  query getProductsFromCollection(
    $collectionId: ID!
    $first: Int = 250
    $sortKey: ProductCollectionSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    node(id: $collectionId) {
      id
      ... on Collection {
        products(first: $first, sortKey: $sortKey, reverse: $reverse) {
          ...productConnection
        }
      }
    }
  }
  ${productConnectionFragment}
`
export default getCollectionProductsQuery
