import React, { useEffect } from 'react'
import { Bag, Product } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store'
import { useGetProductsQuery } from '../../store/api'
import { setProducts } from '../../store/slices'

import { StyledHomeWrapper } from './styles'

const Home: React.FC = () => {
  const { products } = useAppSelector(state => state.productState)
  const dispatch = useAppDispatch()

  const { data } = useGetProductsQuery()

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data))
    }
  }, [data])

  return (
    <StyledHomeWrapper>
      {products.map((item, index) => (
        <Product key={index} variant="vertical" product={item} />
      ))}
      <Bag />
    </StyledHomeWrapper>
  )
}

export default Home
