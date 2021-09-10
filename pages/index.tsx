import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@shopify/utils'
// import type { Product } from '@shopify/types/product'

export async function getStaticProps(context: any) {
  const products = await getAllProducts()
  console.log(products[0])
  if (!products) {
    return {
      notFound: true,
    }
  }
  return {
    props: { products },
  }
}

// Typescript type problem...
const Home: NextPage = ({ products }: { products: typeof getStaticProps }) => {
  return (
    <div className='w-full border border-gray-500 h-full'>
      {
        (products && products?.length > 0) && 
          products.map((product: [], index: number) => 
              <div key={index} className='flex flex-col m-4'>
                <p>item: {product.title}</p>
                <p>type: {product.productType}</p>
                <p>tags: {product.tags}</p>
                <p>price: {product.price.value} {product.price.currencyCode}</p>
                <p>desc: {product.description}</p>
                <p>sale: {product.availableForSale ? 'ok' : 'not available'}</p>
              </div>
          )
      }
    </div>
  )
}

export default Home

