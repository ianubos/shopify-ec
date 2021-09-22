import { productConnectionFragment } from "./get-all-products-query"

const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String) {
    productByHandle(handle: $handle) {
      ...productConnection
    }
  }

  ${productConnectionFragment}
`

export default getProductQuery
