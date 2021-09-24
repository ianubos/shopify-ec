import { shopifyAllProducts, shopifySingleProduct } from '@shopify/product'
import undefToNull from '@utils/undefToNullInObj'

export default function SingleProduct({ product }) {
  console.log(product)
  return (
     <>
      <h1>Frontend here</h1>
     </>
  )
}

export async function getStaticProps(
  { params: { slug } }
) {
  const product = await shopifySingleProduct(slug)
  return {
    props: { product: undefToNull(product) },
    revalidate: 200,
  }
}

export async function getStaticPaths() {
  const products = await shopifyAllProducts()
  const paths = products?.map((product) => {
    return {
      params: {
        slug: `${product.handle}`,
      }
    }
  })
  return {
    paths,
    fallback: 'blocking',
  }
}