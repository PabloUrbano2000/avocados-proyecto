import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

// export const getServerSideProps = async () => {
//   const response = await fetch(
//     'https://avocados-proyecto-mgpiy9zhc-pablitoelmaldy.vercel.app//api/avo'
//   )
//   const { data }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList: data,
//     },
//   }
// }

export const getStaticProps = async () => { // pages only
  const response = await fetch(
    'https://avocados-proyecto-mgpiy9zhc-pablitoelmaldy.vercel.app//api/avo'
  )
  const { data }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList: data,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  // const [productList, setProductList] = useState<TProduct[]>([])

  // useEffect(() => {}, [])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
