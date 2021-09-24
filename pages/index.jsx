import { getAllProducts } from '@shopify/utils'
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

