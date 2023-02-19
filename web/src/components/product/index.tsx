import React from 'react'
import { Button } from '../index'

import {
  StyledProductWrapper,
  StyledImageProduct,
  StyledPriceProduct,
  StyledDescriptionProduct,
} from './styles'

const product: React.FC = () => {
  return (
    <StyledProductWrapper>
      <StyledImageProduct src="https://cdn.shopify.com/s/files/1/0563/8691/2461/products/mbp_prateado.png?v=1621028977" />
      <StyledDescriptionProduct>
        Macbook Pro Apple 13.3, M2, 8GB RAM, 256GB SSD - Cinza-espacial
      </StyledDescriptionProduct>
      <StyledPriceProduct>R$ 8.824,51</StyledPriceProduct>
      <Button variant="contained">Comprar</Button>
    </StyledProductWrapper>
  )
}

export default product
