import React from 'react'
import { useSelector } from 'react-redux'
import GenderChart from './GenderChart';
import ProductChart from './ProductChart';
import Loading from './Loading';
const Analytics = () => {
  const state = useSelector((state) => state.productReducer)
  const { products } = state


  if (!products) return <Loading />
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>

      <GenderChart products={products} />
      <ProductChart products={products} />
    </div>
  )
}

export default Analytics