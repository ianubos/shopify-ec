import { shopifyAllProducts } from '@shopify/product'
import { shopifyCollection } from '@shopify/collection'
import undefToNull from '@utils/undefToNullInObj'
import { Layout, Contents, Carousel } from '@components/common'
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

/** Product Data */
export async function getStaticProps() {
  const [
    products, 
    collections
  ] = await Promise.all([
    shopifyAllProducts(), 
    shopifyCollection()
  ])
  return {
    props: { 
      products: products.map(p => undefToNull(p)), 
      collections: collections.map(c => undefToNull(c)),
    },
    revalidate: 60,
  }
}

export default Home

