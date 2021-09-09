// import { API_URL, API_TOKEN } from '@shopify/const'

// export interface ShopifyConfig {
//   locale?: string
//   locales?: string[]
//   commerceUrl: string
//   apiToken: string
//   cartCookie: string
//   cartCookieMaxAge: number
//   customerCookie: string
//   fetch<Data = any, Variables = any>(
//     query: string,
//     queryData?: CommerceAPIFetchOptions<Variables>,
//     fetchOptions?: RequestInit
//   ): Promise<GraphQLFetcherResult<Data>>
// }

// export interface GraphQLFetcherResult<Data = any> {
//   data: Data
//   res: Response
// }

// export interface CommerceAPIFetchOptions<Variables> {
//   variables?: Variables
//   preview?: boolean
// }


// async function callShopify(query: string): Promise<any> {

//   const fetchOptions: {} = {
//     endpoint: API_URL,
//     method: "POST",
//     headers: {
//       "X-Shopify-Storefront-Access-Token": API_TOKEN,
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   };

//   try {
//     const data = await fetch(API_URL, fetchOptions).then((response) =>
//       response.json(),
//     );
//     return data;
//   } catch (error) {
//     throw new Error("Could not fetch products!");
//   }
// }

// export async function getAllProductsInCollection(collection: string) {
//   const query =
//     `{
//       collectionByHandle(handle: "${collection}") {
//         id
//         title
//         products(first: 250) {
//           edges {
//             node {
//               id
//               titledomain
//               handle
//               images(first: 250) {
//                 edges {
//                   node {
//                     id
//                     originalSrc
//                     height
//                     width     
//                     altText             
//                   }
//                 }
//               }
//               variants(first: 250) {
//                 edges {
//                   node {
//                     id
//                     title
//                     price                
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }`
//   ;

//   const response = await callShopify(query);

//   const allProducts = response.data.collectionByHandle.products.edges
//     ? response.data.collectionByHandle.products.edges
//     : [];

//   return allProducts;
// }

// export async function getProductSlugs(collection: string) {
//   const query =
//     `{
//       collectionByHandle(handle: "${collection}") {
//         products(first: 250) {
//           edges {
//             node {
//               handle              
//             }
//           }
//         }
//       }
//     }`
//   ;

//   const response = await callShopify(query);

//   const slugs = response.data.collectionByHandle.products.edges
//     ? response.data.collectionByHandle.products.edges
//     : [];

//   return slugs;
// }

// export async function getProduct(handle) {
//   const query =
//     `{
//       productByHandle(handle: "${handle}") {
//         id
//         title
//         handle
//         description
//         images(first: 250) {
//           edges {
//             node {
//               id
//               originalSrc
//               height
//               width     
//               altText             
//             }
//           }
//         }
//         variants(first: 250) {
//           edges {
//             node {
//               id
//               title
//               price                
//             }
//           }
//         }
//       }
//     }`
//   ;

//   const response = await callShopify(query);

//   const product = response.data.productByHandle
//     ? response.data.productByHandle
//     : [];

//   return product;
// }

// export async function createCheckout(id, quantity) {
//   const query =
//     `mutation 
//       {
//         checkoutCreate(input: {
//           lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
//         }) {
//           checkout {
//              id
//              webUrl
//              lineItems(first: 250) {
//                edges {
//                  node {
//                    id
//                    title
//                    quantity
//                  }
//                }
//              }
//           }
//         }
//       }      
//     `
//   ;

//   const response = await callShopify(query);

//   const checkout = response.data.checkoutCreate.checkout
//     ? response.data.checkoutCreate.checkout
//     : [];

//   return checkout;
// }

// export async function updateCheckout(id, lineItems) {  
//   const formattedLineItems = lineItems.map(item => {
//     return `{
//       variantId: "${item.variantId}",
//       quantity:${item.quantity}
//     }`
//   })

//   const query =
//     `mutation 
//       {
//         checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
//           checkout {
//              id
//              webUrl
//              lineItems(first: 250) {
//                edges {
//                  node {
//                    id
//                    title
//                    quantity
//                  }
//                }
//              }
//           }
//         }
//       }      
//     `
//   ;

//   const response = await callShopify(query);

//   const checkout = response.data.checkoutLineItemsReplace.checkout
//     ? response.data.checkoutLineItemsReplace.checkout
//     : [];

//   return checkout;
// }