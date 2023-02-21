import { RemoveShoppingCartRounded } from '@mui/icons-material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '../index'
import { ButtonQuantity } from './components/button-quantity'

import {
  StyledProductWrapper,
  StyledImageProductBox,
  StyledImageProduct,
  StyledContentProduct,
  StyledPriceProduct,
  StyledDescriptionProduct,
  StyledProductButtons,
} from './styles'
import { addItemCart, removeItemCart } from '../../store/slices'
import { useAppDispatch } from '../../store'
import { ProductProps } from '../../store/types'

interface ProductsProps {
  variant: 'vertical' | 'bag'
  product: ProductProps
}

const product: React.FC<ProductsProps> = ({ variant = 'vertical', product }) => {
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeItemCart(product.id))
  }

  const handleAddToCart = () => {
    dispatch(addItemCart(product))
  }

  return (
    <StyledProductWrapper variant={variant}>
      <StyledImageProductBox>
        <StyledImageProduct src={product.image} />
      </StyledImageProductBox>
      <StyledContentProduct>
        <StyledDescriptionProduct>{product.description}</StyledDescriptionProduct>
        <StyledPriceProduct>R$ {product.price}</StyledPriceProduct>
      </StyledContentProduct>
      {variant === 'vertical' ? (
        <Button variant="contained" fullWidth onClick={handleAddToCart}>
          Comprar
        </Button>
      ) : (
        <StyledProductButtons>
          <ButtonQuantity index={product.id} quantity={product.quantity} />
          <span onClick={handleRemoveFromCart}>
            <DeleteIcon htmlColor="red" /> Remover
          </span>
        </StyledProductButtons>
      )}
    </StyledProductWrapper>
  )
}

export default product
