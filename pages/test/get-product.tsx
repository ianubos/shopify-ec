import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getCollections, getProductsByCollection, searchByKeyword } from '@shopify/utils'
import type { Product, ProductCollection as Collection } from '@shopify/types/product'

export async function getStaticProps(context: any) {
  const collections = await getCollections()
  const productsOfAnCollection = await getProductsByCollection(collections[1].id)
  if (!productsOfAnCollection || !collections) {
    return {
      notFound: true,
    }
  }

  return {
    props: { collections, products: productsOfAnCollection },
  }
}

interface Props {
  collections?: Collection[],
  products?: Product[]
}

const Test: NextPage<Props> = ({ collections, products }) => {
  return (
    <>
    <div className='w-full border border-gray-500 h-full m-8'>
    <h2 className='text-lg underline'>Collections</h2>
    {
      collections && 
        collections.map((collection: Collection, index: number) => 
            <div key={index} className='flex flex-col m-4'>
              <p>title: {collection.title}</p>
              <p>slug: {collection?.slug}</p>
              <p className='flex'>tag: {collection?.tag && collection.tag.length > 0 && collection.tag.map((t,i) => <span className='ml-1' key={i}>{t},</span>)}</p>
            </div>
        )
    }
    <h2 className='text-lg underline'>Products by Collection</h2>
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

