export type ProductImage = {
    url: string
    alt?: string
}

export type ProductPrice = {
    value: number
    currencyCode?: 'JPY' | 'EUR' | 'USD' | string
    retailPrice?: number
    salePrice?: number
}

export type ProductCollection = {
    id: string | number
    title: string
    handle?: string
}

export type Product = {
    id: string
    title: string
    productType?: string
    tags?: string[]
    vendor?: string
    description?: string
    slug?: string
    path?: string
    images: ProductImage[]
    price: ProductPrice
    collections?: ProductCollection[]
    quantity?: number
    productVariantId?: string
}

// export type SearchProductsBody = {
//     search?: string
//     categoryId?: string | number
//     brandId?: string | number
//     sort?: string
//     locale?: string
// }

export type ProductTypes = {
    product: Product
    // searchBody: SearchProductsBody
}

// export type SearchProductsHook<T extends ProductTypes = ProductTypes> = {
//     data: {
//         products: T['product'][]
//         found: boolean
//     }
//     body: T['searchBody']: T['product'] }
//     variables: { path: 
//     input: T['searchBody']
//     fetcherInput: T['searchBody']
// }

// export type ProductsSchema<T extends ProductTypes = ProductTypes> = {
//     endpoint: {
//         options: {}
//         handlers: {
//         getProducts: SearchProductsHook<T>
//         }
//     }
// }

// export type GetAllProductPathsOperation<
//     T extends ProductTypes = ProductTypes
//     > = {
//     data: { products: Pick<T['product'], 'path'>[] }
//     variables: { first?: number }
// }

// export type GetAllProductsOperation<T extends ProductTypes = ProductTypes> = {
//     data: { products: T['product'][] }
//     variables: {
//         relevance?: 'featured' | 'best_selling' | 'newest'
//         ids?: string[]
//         first?: number
//     }
// }

// export type GetProductOperation<T extends ProductTypes = ProductTypes> = {
//     data: { product?: T['product'] }
//     variables: { path: string; slug?: never } | { path?: never; slug: string }
// }
