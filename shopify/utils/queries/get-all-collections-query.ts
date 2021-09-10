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
          }
          products(first: 250) {
            edges {
                node {
                    tags
                }
            }
          }
        }
      }
    }
  }
`
export default getSiteCollectionsQuery
