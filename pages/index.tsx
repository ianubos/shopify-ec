import type { NextPage } from 'next'
import { getAllProducts } from '@shopify/utils'

const Home: NextPage = ({products}) => {
  console.log(products[0].node)
  return (
    <div className='w-full border border-gray-500 h-full'>
      {
        (products && products?.length > 0) && 
          products.map((product: {}, index: number) => {
            return <div key={index}>{product?.node.title}</div>
          })
      }
    </div>
  )
}

export default Home

export async function getStaticProps(context: any) {
  const data = await getAllProducts()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { products: data.products.edges ?? [] },
  }
}