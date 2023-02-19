import React from 'react'
import { Product } from '../../components'

import { StyledHomeWrapper } from './styles'

const Home: React.FC = () => {
  return (
    <StyledHomeWrapper>
      <Product />
    </StyledHomeWrapper>
  )
}

export default Home
