import { getAllProducts } from '@shopify/utils'
import { shopifyCollection } from '@shopify/collection'

const Home = (
  { products, collections }
) => {
  return (
    <>
    {/* Frontend */}
    </>
  )
}

/** Product Data */
export async function getStaticProps() {
  const products = await getAllProducts()
  const collections = await shopifyCollection()
  return {
    props: { 
      products, 
      collections
    },
    revalidate: 60,
  }
}

export default Home

