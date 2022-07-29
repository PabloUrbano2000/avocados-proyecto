import React from 'react'

const HomePage = () => {
  const [productList, setProductList] = React.useState<TProduct[]>([])
  React.useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => setProductList(data))
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => {
        return <div key={product.id}>{product.name}</div>
      })}
    </div>
  )
}

export default HomePage
