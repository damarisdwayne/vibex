import React, { useState } from 'react'
import { Delete, Edit } from '@mui/icons-material'
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
  StyledProductManagmentButtons,
} from './styles'
import { addItemCart, removeItemCart } from '../../store/slices'
import { useAppDispatch } from '../../store'
import { ProductProps } from '../../store/types'
import { ModalDeleteProduct, ModalEditProduct } from '../modals'
import { formatNumber } from '../../utils'

interface ProductsProps {
  variant: 'vertical' | 'bag' | 'product-managment'
  product: ProductProps
}

const product: React.FC<ProductsProps> = ({ variant = 'vertical', product }) => {
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeItemCart(product.id))
  }

  const handleAddToCart = () => {
    dispatch(addItemCart(product))
  }

  const Buttons = () => {
    switch (variant) {
      case 'vertical':
        return (
          <Button variant="contained" fullWidth onClick={handleAddToCart}>
            Comprar
          </Button>
        )
      case 'bag':
        return (
          <StyledProductButtons>
            <ButtonQuantity index={product.id} quantity={product.quantity} />
            <span onClick={handleRemoveFromCart}>
              <Delete htmlColor="red" /> Remover
            </span>
          </StyledProductButtons>
        )
      case 'product-managment':
        return (
          <StyledProductManagmentButtons>
            <Edit htmlColor="blue" onClick={() => setModalEditIsOpen(true)} />
            <Delete htmlColor="red" onClick={() => setModalDeleteIsOpen(true)} />
          </StyledProductManagmentButtons>
        )
      default:
        return (
          <Button variant="contained" fullWidth onClick={handleAddToCart}>
            Comprar
          </Button>
        )
    }
  }

  let price = parseFloat(product.price.toString())

  return (
    <StyledProductWrapper variant={variant}>
      <StyledImageProductBox>
        <StyledImageProduct src={product.image} />
      </StyledImageProductBox>
      <StyledContentProduct>
        <StyledDescriptionProduct>{product.description}</StyledDescriptionProduct>
        <StyledPriceProduct>{formatNumber(price)}</StyledPriceProduct>
      </StyledContentProduct>
      <Buttons />
      <ModalDeleteProduct
        {...{
          isOpen: modalDeleteIsOpen,
          onRequestClose: () => setModalDeleteIsOpen(false),
          product,
        }}
      />
      <ModalEditProduct
        {...{
          isOpen: modalEditIsOpen,
          onRequestClose: () => setModalEditIsOpen(false),
          product,
        }}
      />
    </StyledProductWrapper>
  )
}

export default product
