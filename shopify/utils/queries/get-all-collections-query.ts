import { productConnectionFragment } from "./search-products-query"

const getSiteCollectionsQuery = /* GraphQL */ `
  query getSiteCollections($first: Int = 10) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          image {
            originalSrc
            altText
            height
            width
          }
          products(first: 250) {
            ...productConnection
          }
        }
      }
    }
  }

  ${productConnectionFragment}
`
export default getSiteCollectionsQuery
