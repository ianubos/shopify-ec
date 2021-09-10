import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getCollections } from '@shopify/utils'

export async function getStaticProps(context: any) {
  const collections = await getCollections()
  if (!collections) {
    return {
      notFound: true,
    }
  }
  return {
    props: { collections },
  }
}

// Typescript type problem...
const Test: NextPage = ({ collections }: { collections: typeof getStaticProps }) => {
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
    </div>
    </>
  )
}

export default Test

