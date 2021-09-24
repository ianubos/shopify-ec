import type { NextPage } from 'next'
import { useState, useEffect } from 'react' 
// import { getCollections, getProductsByCollection } from '@shopify/utils'
import type { Product, ProductCollection as Collection } from '@shopify/types/product'
import { shopifyCollection, shopifyCollectionProducts } from '@shopify/collection'

interface Props {
  collections?: Collection[],
  products?: Product[]
}

const Test: NextPage<Props> = () => {
  const [products, setProducts] = useState(null)
  const [collections, setCollections] = useState(null)

  async function getCollections() {
    const fetched = await shopifyCollection()
    setCollections(fetched)
    return fetched
  }

  async function getProductsByCollection(col_id) {
    const fetched = await shopifyCollectionProducts(col_id)
    setProducts(fetched)
    return fetched
  }

  useEffect(() => {
    getCollections()
      .then(collections => {
        getProductsByCollection(collections[0]?.id)
      })
  } ,[])

  // const collections = useCollection()
  return (
    <>
    <div className='w-full border border-gray-500 h-full p-8'>
    <h2 className='text-lg underline'>Collections</h2>
    <div className='m-4 border border-gray-600'>
      {collections && collections.map((col, i) => {
        return <div key={i} className='flex flex-col m-4'>
          <p>collection: {col.title}</p>
          <button 
            className='px-4 py-2 text-white bg-gray-900 w-56'
            onClick={() => getProductsByCollection(col.id)}
          >set</button>
        </div>
      })}
    </div>
    {
        (products && products?.length > 0) && 
          products.map((product: [], index: number) => 
              <div key={index} className='flex flex-col m-4'>
                <p>item: {product.title}</p>
                <p>type: {product.productType}</p>
                <p>tags: {product.tags}</p>
                <p>handle: {product.handle}</p>
                <p>price: {product.price.value} {product.price.currencyCode}</p>
                <p>desc: {product.description}</p>
                <p>sale: {product.availableForSale ? 'ok' : 'not available'}</p>
                <p>variantId: {product.variantId}</p>
              </div>
          )
    }
    </div>
    </>
  )
}



export default Test

