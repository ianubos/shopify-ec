// import { productConnectionFragment } from "./get-all-products-query"

const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String) {
    product(handle: $handle) {
      id
      handle
      availableForSale
      title
      productType
      vendor
      description
      descriptionHtml
      tags
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 2) {
        edges {
          node {
            id
            title
            sku
            availableForSale
            requiresShipping
            selectedOptions {
              name
              value
            }
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
              currencyCode
            }
          }
        }
      }
      images(first: 2) {
        edges {
          node {
            originalSrc
            altText
            width
            height
          }
        }
      }
    }
  }
`

export default getProductQuery
