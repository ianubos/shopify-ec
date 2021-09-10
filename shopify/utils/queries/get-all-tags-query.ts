
const getSiteTagsQuery = /* GraphQL */ `
  query getSiteTags($first: Int = 10) {
    productTags(first: $first) {
      edges {
        node
      }
    }
  }
`
export default getSiteTagsQuery
