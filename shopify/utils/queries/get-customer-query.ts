export const getCustomerQuery = /* GraphQL */ `
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      email
      phone
      acceptsMarketing
      defaultAddress {
        address1
        address2
        city
        zip
        formattedArea
        formatted
        country
        province
      }
    }
  }
`
export default getCustomerQuery
