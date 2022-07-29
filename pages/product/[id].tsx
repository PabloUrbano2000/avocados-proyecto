import React from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = React.useState<TProduct | null>(null)
  const { query } = useRouter()

  React.useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((res) => res.json())
        .then((res) => setProduct(res))
        .catch((err) => {
          console.log(err)
        })
    }
  }, [query])

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      <div>{product?.name}</div>
    </section>
  )
}

export default ProductPage
