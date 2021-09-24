import { shopifyAllProducts } from '@shopify/product'
import { shopifyCollection } from '@shopify/collection'

// import { Layout } from '@components/common'

const Home = (
  { products, collections }
) => {
  return (
    <>
    {/* Frontend */}
    </>
  )
}

// Home.Layout = Layout

/** Product Data */
export async function getStaticProps() {
  const products = await shopifyAllProducts()
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

