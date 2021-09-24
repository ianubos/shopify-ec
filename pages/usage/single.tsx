import type { NextPage } from 'next'
import { useState, useEffect } from 'react' 
import { shopifySingleProduct } from '@shopify/product'


const Test: NextPage = () => {
  const [product, setProduct] = useState(null)

  async function getSingleProduct(handle) {
    const fetched = await shopifySingleProduct(handle)
    setProduct(fetched)
    console.log(fetched)
    return fetched
  }

  useEffect(() => {
    getSingleProduct("テスト商品")
  } ,[])

  return (
    <>
    <div className='w-full border border-gray-500 h-full p-8'>
    <h2 className='text-lg underline'>テスト商品</h2>
    { product && (
        <div className='flex flex-col m-4'>
        <p>item: {product.title}</p>
        <p>type: {product.productType}</p>
        <p>tags: {product.tags}</p>
        <p>handle: {product.handle}</p>
        <p>price: {product.price.value} {product.price.currencyCode}</p>
        <p>desc: {product.description}</p>
        <p>sale: {product.availableForSale ? 'ok' : 'not available'}</p>
        <p>variantId: {product.variantId}</p>
        </div>
    )}
    </div>
    </>
  )
}



export default Test

