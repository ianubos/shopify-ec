import { shopifyAllProducts } from '@shopify/product'
import { shopifyCollection } from '@shopify/collection'
import { Layout } from '../components/common/layout'
import { Contents } from '../components/common/contents'

const Home = (
  { products, collections }
) => {
  //products データ
  console.log(products)
  return (
    <>
    {/* Frontend */}
    <Layout>

      <Contents 
          products={products}    
      />
      {/* <div style={{height: '2000px'}}></div> */}
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

