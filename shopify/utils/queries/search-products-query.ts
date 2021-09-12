// The limitatino is 250 products. If the number of items get over that, system should be reconsidered.
// Not all of these information are necessary. This is for test.
export const productConnectionFragment = /* GraphQL */ `
  fragment productConnection on ProductConnection {
    edges {
      node {
        id
        title
        productType
        tags
        description
        availableForSale
        vendor
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
              width
              height
            }
          }
        }
        collections(first: 3) {
          edges {
            node {
              title
              id
              handle
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              quantityAvailable
            }
          }
        }
      }
    }
  }
`

const searchProductsQuery = /* GraphQL */ `
  query searchProducts(
    $first: Int = 250
    $query: String = ""
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    products(
      first: $first
      sortKey: $sortKey
      reverse: $reverse
      query: $query
    ) {
      ...productConnection
    }
  }

  ${productConnectionFragment}
`
export default searchProductsQuery
