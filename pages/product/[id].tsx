import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://avocados-proyecto-mgpiy9zhc-pablitoelmaldy.vercel.app/api/avo'
  )
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map((avo) => ({
    params: {
      id: avo.id,
    },
  }))

  return {
    paths: paths,
    // incremental static generation
    // 404 for everything generation
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // pages only
  const id = params?.id as string
  const response = await fetch(
    `https://avocados-proyecto-mgpiy9zhc-pablitoelmaldy.vercel.app/api/avo/${id}`
  )
  const data: TProduct = await response.json()

  return {
    props: {
      product: data,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  // const { query } = useRouter()
  // const [product, setProduct] = useState<TProduct | null>(null)

  // useEffect(() => {
  //   if (query.id) {
  //     window
  //       .fetch(`/api/avo/${query.id}`)
  //       .then((response) => response.json())
  //       .then((data: TProduct) => {
  //         setProduct(data)
  //       })
  //   }
  // }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
