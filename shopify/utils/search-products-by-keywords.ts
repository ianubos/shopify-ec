/**
 * 1. Get all the products
 * 2. Search through title, handle, productType, tags, vendor, and slug 
 * addition. Mulit keyword search
 */

import getAllProducts from './get-all-products'
import type { Product } from '../types/product'

// utilities
function includeKeyword (
    properties: string[], 
    target: string
): boolean {
    /** Return true if property includes target */
    let i = 0,
        targetLowered = target.toLowerCase()
    while (i < properties.length) {
        if (properties[i].toLowerCase().indexOf(targetLowered) !== -1) {
            return true
        }
        i++
    }
    return false
}

function productHasKeyword (
    product: Product, 
    keyword: string
): boolean | void {
    /**
     * Return true if product or product's information has keyword.
     */
    if (!product || !keyword) {
        return
    }
    const {
        title,
        productType,
        tags,
        vendor,
        collections,
        slug
    } = product
    const collectionArray = // [title1, handle1, title2, handle2, ...]
        collections?.reduce((prev, c) => { 
                return prev.concat([c.title, c?.handle]) 
        }, [])
    const properties: (string | null)[] = [ // [<string>, <string>, ...]
        title ?? null, 
        productType ?? null, 
        vendor ?? null, 
        ...(tags ?? []), 
        ...(collectionArray ?? []),
        slug ?? null
    ].filter(p => p) // remove nulls
    return includeKeyword(properties, keyword)
}

// function
async function seacrhProductsByKeywords(keywords: string[]): Promise<Product[] | void> {
    /** FIX: remove blanks and re-count the num of letters */
    /** FIX2: fetch each time when input form is updated -> just once at the first input update */
    if (!keywords || keywords === [] ||  
        keywords.join('').replace(/\s/g, '').length < 2 // has 2 letters or more
    ) { return }
    const allProducts: Product[] = await getAllProducts()
    return allProducts // Return if the product has all the keywords
        .filter(product => 
            keywords.every(keyword => productHasKeyword(product, keyword))
        )
}

export default seacrhProductsByKeywords