import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getCollections, getProductsByCollection } from '@shopify/utils'

export async function getStaticProps(context: any) {
  const collections = await getCollections()
  const productsOfAnCollection = await getProductsByCollection(collections[0].id)
  console.log(productsOfAnCollection)
  if (!productsOfAnCollection || !collections) {
    return {
      notFound: true,
    }
  }

  return {
    props: { collections, products: productsOfAnCollection },
  }
}

// Typescript type problem...
const Test: NextPage = ({ collections, products }) => {
  return (
    <>
    <div className='w-full border border-gray-500 h-full m-8'>
      {
        collections && 
          collections.map((collection: [], index: number) => 
              <div key={index} className='flex flex-col m-4'>
                <p>id: {collection.id}</p>
                <p>title: {collection.title}</p>
                <p>slug: {collection.slug}</p>
                <p className='flex'>tag: {collection.tag && collection.tag.length > 0 && collection.tag.map((t,i) => <span className='ml-1' key={i}>{t},</span>)}</p>
              </div>
          )
      }
      <h2 className='text-lg'>Products by Collection</h2>
      {
        products && products.length > 0 &&
        products.map((product: {}, index: number) => {
            console.log('collection',product)
            return <div key={index} className='flex flex-col m-4'>
                      <h3>Product: {product?.title}</h3>
                      <h3>Collection: {product?.collection.title}</h3>
                  </div>
          }
        )
      }
    </div>
    </>
  )
}

export default Test

