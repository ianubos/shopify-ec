/**
 * FIX1: debouncer is now working
 * FIX2: hold initial state
 * 
 * https://stackoverflow.com/questions/62486028/how-do-i-properly-use-useeffect-for-a-async-fetch-call-with-react-react-hooks-e
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { shopifySearchProduct } from '@shopify/product'
import type { Product } from '@shopify/types/product'
import { SearchLayout } from '@components/search'
import { debounce } from '@utils/debounce' 

const Test: NextPage = () => {
    const [keywords, setKeywords] = useState(['PLA'])
    const [products, setProducts] = useState<Product[]>([])
    const fetchProducts = async function(keywords) {
        const fetchedProducts = await shopifySearchProduct(keywords)
        console.log(fetchProducts)
        if (!fetchedProducts) {
            return
        }
        setProducts(fetchedProducts)
    }
    const isFetchedFirst = useRef(false)
    
    useEffect(() => {
        if (!isFetchedFirst.current) {
            isFetchedFirst.current = true
            fetchProducts(keywords)
        } 
    }, [])

    return (
        <div className='w-full border border-gray-500 h-full'>
        <input
            type="text"
            value={keywords}
            onChange={e => {
                const inputArray = e.target.value.split(' ').filter(p => p)
                setKeywords(e.target.value)
                fetchProducts(inputArray)
            }}
            className='border-gray-500 border'
        />
        <h2 className='text-lg underline'>Search By Keyword {keywords.toString()}</h2>
            {
                products && products.length > 0 &&
                products.map((product: {}, index: number) => {
                    // console.log('collection',product)
                    return <div key={index} className='flex flex-col m-4'>
                                <h3>Product: {product?.title}</h3>
                                <h3>Collection: {product?.collection.title}</h3>
                            </div>
                    }
                )
            }
        </div>
    )
}

export default Test

