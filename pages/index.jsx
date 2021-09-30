import { shopifyAllProducts } from '@shopify/product'
import { shopifyCollection } from '@shopify/collection'
import undefToNull from '@utils/undefToNullInObj'
import Layout from '../components/common/layout/Layout'
import Contents from '../components/common/contents/Contents'
import Carousel from '../components/common/carousel/Carousel'

// import { Layout } from '@components/common'

const Home = (
  { products, collections }
) => {
  console.log(products)
  console.log(collections)
  return (
    <>
    {/* Frontend */}
    <Layout collections={collections}>
      <Carousel />
      <Contents 
        products={products}
        collections={collections}
      />
    </Layout>
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
      products: products.map(p => undefToNull(p)), 
      collections: collections.map(c => undefToNull(c)),
    },
    revalidate: 60,
  }
}

export default Home

