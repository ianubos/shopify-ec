import type { Product } from '../types/product'
import type { Cart } from '../types/cart'
import { sortByAlphabet } from '@utils/sort'

// utilities
const money = ({ amount, currencyCode }: any) => {
  return {
    value: +amount,
    currencyCode,
  }
}

const normalizeProductImages = ({ edges }: any) =>
  edges?.map(({ node: { originalSrc: url, ...rest } }) => ({
    url,
    ...rest,
  }))

// const normalizeCollections = ({ edges }: any) => 
//   edges?.map(({ node: { ...args }}) => ({
//       ...args
//   }))

const getTagsOfProducts = ({ edges }: any) => edges
  .map(({ node: { tags } }) => {
    return tags
  })
  .reduce((prev, current) => { // remove same tags
    if (current === undefined) return prev;
    current.forEach((tag) => {
      if (prev.includes(tag)) return;
      prev.push(tag)
  })
  return prev
}, [])

const getVariantId = ({ edges }: any) => edges
  .map(( { node: { id } } ) => {
    return id ?? null
  })[0]

  export function normalizeLineItem({
    id,
    title,
    variant,
    quantity,
  }: any) {
    return {
      id,
      title,
      quantity,
      ...(variant && {
        variantId: variant.id,
        price: money(variant.priceV2),
        image: {
          ...variant.image,
          url: variant?.image?.originalSrc,
        },
      })
    }
  }


// normalizers
export function normalizeProduct({
  id,
  title,
  productType,
  tags,
  vendor,
  images,
  description,
  variants,
  handle,
  priceRange,
  collections,
  ...rest
}: any): Product {
  return {
    id,
    title,
    vendor,
    tags,
    handle,
    productType,
    path: `/${handle}`,
    slug: handle?.replace(/^\/+|\/+$/g, ''),
    price: money(priceRange?.minVariantPrice),
    images: normalizeProductImages(images),
    ...(description && { description }),
    ...(variants && { quantity: variants.edges[0].node.quantityAvailable }),
    ...(collections && { // A Product has just one collection in this project
      collection: collections.edges.map(({ node: { ...args } }) => normalizeCollection({...args}) )[0] 
    }), 
    variantId: getVariantId(variants),
    ...rest,
  }
}

export function normalizeCart({
  id,
  webUrl,
  totalPriceV2,
  completedAt,
  lineItems,
}: any) {
  return {
    id,
    webUrl,
    ...(totalPriceV2 && { totalPrice: totalPriceV2}),
    ...(completedAt && { completed: completedAt }),
    ...(lineItems && { lineItems: lineItems.edges.map(({node}) => normalizeLineItem(node)) }),
  }
}

export function normalizeCollection({
  id,
  title,
  handle,
  products,
  image,
  ...rest
}: any) {
  return {
    id,
    title,
    slug: `/${handle}`,
    ...(image && { image }),
    ...(products && { tag: sortByAlphabet(
      getTagsOfProducts(products)
    ) }),
    ...rest
  }
}

// import type { Page } from '../types/page'
// import type { Product } from '../types/product'
// import type { Cart, LineItem } from '../types/cart'
// import type { Category } from '../types/site'

// import {
//   Product as ShopifyProduct,
//   Checkout,import type { Page } from '../types/page'
// import type { Product } from '../types/product'
// import type { Cart, LineItem } from '../types/cart'
// import type { Category } from '../types/site'

// import {
//   Product as ShopifyProduct,
//   Checkout,
//   CheckoutLineItemEdge,
//   SelectedOption,
//   ImageConnection,
//   ProductVariantConnection,
//   MoneyV2,
//   ProductOption,
//   Page as ShopifyPage,
//   PageEdge,
//   Collection,
// } from '../schema'
// import { colorMap } from '@lib/colors'

// const money = ({ amount, currency Code }: MoneyV2) => {
//   return {
//     value: +amount,
//     currencyCode,
//   }
// }

// const normalizeProductOption = ({
//   id,
//   name: displayName,
//   values,
// }: ProductOption) => {
//   return {
//     __typename: 'MultipleChoiceOption',
//     id,
//     displayName: displayName.toLowerCase(),
//     values: values.map((value) => {
//       let output: any = {
//         label: value,
//       }
//       if (displayName.match(/colou?r/gi)) {
//         const mapedColor = colorMap[value.toLowerCase().replace(/ /g, '')]
//         if (mapedColor) {
//           output = {
//             ...output,
//             hexColors: [mapedColor],
//           }
//         }
//       }
//       return output
//     }),
//   }
// }

// const normalizeProductImages = ({ edges }: ImageConnection) =>
//   edges?.map(({ node: { originalSrc: url, ...rest } }) => ({
//     url,
//     ...rest,
//   }))

// const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
//   return edges?.map(
//     ({
//       node: {
//         id,
//         selectedOptions,
//         sku,
//         title,
//         priceV2,
//         compareAtPriceV2,
//         requiresShipping,
//         availableForSale,
//       },
//     }) => {
//       return {
//         id,
//         name: title,
//         sku: sku ?? id,
//         price: +priceV2.amount,
//         listPrice: +compareAtPriceV2?.amount,
//         requiresShipping,
//         availableForSale,
//         options: selectedOptions.map(({ name, value }: SelectedOption) => {
//           const options = normalizeProductOption({
//             id,
//             name,
//             values: [value],
//           })

//           return options
//         }),
//       }
//     }
//   )
// }

// export function normalizeProduct({
//   id,
//   title: name,
//   vendor,
//   images,
//   variants,
//   description,
//   descriptionHtml,
//   handle,
//   priceRange,
//   options,
//   metafields,
//   ...rest
// }: ShopifyProduct): Product {
//   return {
//     id,
//     name,
//     vendor,
//     path: `/${handle}`,
//     slug: handle?.replace(/^\/+|\/+$/g, ''),
//     price: money(priceRange?.minVariantPrice),
//     images: normalizeProductImages(images),
//     variants: variants ? normalizeProductVariants(variants) : [],
//     options: options
//       ? options
//           .filter((o) => o.name !== 'Title') // By default Shopify adds a 'Title' name when there's only one option. We don't need it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
//           .map((o) => normalizeProductOption(o))
//       : [],
//     ...(description && { description }),
//     ...(descriptionHtml && { descriptionHtml }),
//     ...rest,
//   }
// }

// export function normalizeCart(checkout: Checkout): Cart {
//   return {
//     id: checkout.id,
//     url: checkout.webUrl,
//     customerId: '',
//     email: '',
//     createdAt: checkout.createdAt,
//     currency: {
//       code: checkout.totalPriceV2?.currencyCode,
//     },
//     taxesIncluded: checkout.taxesIncluded,
//     lineItems: checkout.lineItems?.edges.map(normalizeLineItem),
//     lineItemsSubtotalPrice: +checkout.subtotalPriceV2?.amount,
//     subtotalPrice: +checkout.subtotalPriceV2?.amount,
//     totalPrice: checkout.totalPriceV2?.amount,
//     discounts: [],
//   }
// }

// function normalizeLineItem({
//   node: { id, title, variant, quantity },
// }: CheckoutLineItemEdge): LineItem {
//   return {
//     id,
//     variantId: String(variant?.id),
//     productId: String(variant?.id),
//     name: `${title}`,
//     quantity,
//     variant: {
//       id: String(variant?.id),
//       sku: variant?.sku ?? '',
//       name: variant?.title!,
//       image: {
//         url: variant?.image?.originalSrc || '/product-img-placeholder.svg',
//       },
//       requiresShipping: variant?.requiresShipping ?? false,
//       price: variant?.priceV2?.amount,
//       listPrice: variant?.compareAtPriceV2?.amount,
//     },
//     path: String(variant?.product?.handle),
//     discounts: [],
//     options: variant?.title == 'Default Title' ? [] : variant?.selectedOptions,
//   }
// }

// export const normalizePage = (
//   { title: name, handle, ...page }: ShopifyPage,
//   locale: string = 'en-US'
// ): Page => ({
//   ...page,
//   url: `/${locale}/${handle}`,
//   name,
// })

// export const normalizePages = (edges: PageEdge[], locale?: string): Page[] =>
//   edges?.map((edge) => normalizePage(edge.node, locale))

// export const normalizeCategory = ({
//   title: name,
//   handle,
//   id,
// }: Collection): Category => ({
//   id,
//   name,
//   slug: handle,
//   path: `/${handle}`,
// })

//   CheckoutLineItemEdge,
//   SelectedOption,
//   ImageConnection,
//   ProductVariantConnection,
//   MoneyV2,
//   ProductOption,
//   Page as ShopifyPage,
//   PageEdge,
//   Collection,
// } from '../schema'
// import { colorMap } from '@lib/colors'

// const money = ({ amount, currency Code }: MoneyV2) => {
//   return {
//     value: +amount,
//     currencyCode,
//   }
// }

// const normalizeProductOption = ({
//   id,
//   name: displayName,
//   values,
// }: ProductOption) => {
//   return {
//     __typename: 'MultipleChoiceOption',
//     id,
//     displayName: displayName.toLowerCase(),
//     values: values.map((value) => {
//       let output: any = {
//         label: value,
//       }
//       if (displayName.match(/colou?r/gi)) {
//         const mapedColor = colorMap[value.toLowerCase().replace(/ /g, '')]
//         if (mapedColor) {
//           output = {
//             ...output,
//             hexColors: [mapedColor],
//           }
//         }
//       }
//       return output
//     }),
//   }
// }

// const normalizeProductImages = ({ edges }: ImageConnection) =>
//   edges?.map(({ node: { originalSrc: url, ...rest } }) => ({
//     url,
//     ...rest,
//   }))

// const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
//   return edges?.map(
//     ({
//       node: {
//         id,
//         selectedOptions,
//         sku,
//         title,
//         priceV2,
//         compareAtPriceV2,
//         requiresShipping,
//         availableForSale,
//       },
//     }) => {
//       return {
//         id,
//         name: title,
//         sku: sku ?? id,
//         price: +priceV2.amount,
//         listPrice: +compareAtPriceV2?.amount,
//         requiresShipping,
//         availableForSale,
//         options: selectedOptions.map(({ name, value }: SelectedOption) => {
//           const options = normalizeProductOption({
//             id,
//             name,
//             values: [value],
//           })

//           return options
//         }),
//       }
//     }
//   )
// }

// export function normalizeProduct({
//   id,
//   title: name,
//   vendor,
//   images,
//   variants,
//   description,
//   descriptionHtml,
//   handle,
//   priceRange,
//   options,
//   metafields,
//   ...rest
// }: ShopifyProduct): Product {
//   return {
//     id,
//     name,
//     vendor,
//     path: `/${handle}`,
//     slug: handle?.replace(/^\/+|\/+$/g, ''),
//     price: money(priceRange?.minVariantPrice),
//     images: normalizeProductImages(images),
//     variants: variants ? normalizeProductVariants(variants) : [],
//     options: options
//       ? options
//           .filter((o) => o.name !== 'Title') // By default Shopify adds a 'Title' name when there's only one option. We don't need it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
//           .map((o) => normalizeProductOption(o))
//       : [],
//     ...(description && { description }),
//     ...(descriptionHtml && { descriptionHtml }),
//     ...rest,
//   }
// }

// export function normalizeCart(checkout: Checkout): Cart {
//   return {
//     id: checkout.id,
//     url: checkout.webUrl,
//     customerId: '',
//     email: '',
//     createdAt: checkout.createdAt,
//     currency: {
//       code: checkout.totalPriceV2?.currencyCode,
//     },
//     taxesIncluded: checkout.taxesIncluded,
//     lineItems: checkout.lineItems?.edges.map(normalizeLineItem),
//     lineItemsSubtotalPrice: +checkout.subtotalPriceV2?.amount,
//     subtotalPrice: +checkout.subtotalPriceV2?.amount,
//     totalPrice: checkout.totalPriceV2?.amount,
//     discounts: [],
//   }
// }

// function normalizeLineItem({
//   node: { id, title, variant, quantity },
// }: CheckoutLineItemEdge): LineItem {
//   return {
//     id,
//     variantId: String(variant?.id),
//     productId: String(variant?.id),
//     name: `${title}`,
//     quantity,
//     variant: {
//       id: String(variant?.id),
//       sku: variant?.sku ?? '',
//       name: variant?.title!,
//       image: {
//         url: variant?.image?.originalSrc || '/product-img-placeholder.svg',
//       },
//       requiresShipping: variant?.requiresShipping ?? false,
//       price: variant?.priceV2?.amount,
//       listPrice: variant?.compareAtPriceV2?.amount,
//     },
//     path: String(variant?.product?.handle),
//     discounts: [],
//     options: variant?.title == 'Default Title' ? [] : variant?.selectedOptions,
//   }
// }

// export const normalizePage = (
//   { title: name, handle, ...page }: ShopifyPage,
//   locale: string = 'en-US'
// ): Page => ({
//   ...page,
//   url: `/${locale}/${handle}`,
//   name,
// })

// export const normalizePages = (edges: PageEdge[], locale?: string): Page[] =>
//   edges?.map((edge) => normalizePage(edge.node, locale))

// export const normalizeCategory = ({
//   title: name,
//   handle,
//   id,
// }: Collection): Category => ({
//   id,
//   name,
//   slug: handle,
//   path: `/${handle}`,
// })
