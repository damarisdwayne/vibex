import React from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'

import { palette } from '../../theme'
import Button from '../button'
import { useAppDispatch, useAppSelector } from '../../store'
import { handleCartState } from '../../store/slices'
import { Routes } from '../../routes/routes'
import { Product } from '..'
import {
  StyledBagWrapper,
  StyledBagHeader,
  StyledBagProducts,
  StyledBagFooter,
} from './styles'

const bag: React.FC = () => {
  const { isOpen, items } = useAppSelector(state => state.cartState)
  const dispatch = useAppDispatch()
  const navigation = useNavigate()

  const handleCloseCart = () => {
    dispatch(handleCartState(false))
  }

  return (
    <StyledBagWrapper isOpen={isOpen}>
      {items.length > 0 ? (
        <>
          <StyledBagHeader>
            <h1>Carrinho</h1>
            <CloseIcon
              fontSize="large"
              htmlColor={palette.primary.dark}
              cursor="pointer"
              onClick={handleCloseCart}
            />
          </StyledBagHeader>
          <StyledBagProducts>
            {items.map((item, index) => (
              <Product key={index} variant="bag" product={item} />
            ))}
          </StyledBagProducts>
          <StyledBagFooter>
            <div>
              <p>Subtotal (2 produtos)</p>
              <p>R$ 1.180,00</p>
            </div>
            <div>
              <p>Frete</p>
              <p>R$ 10</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 1.190,00</strong>
            </div>
            <Button
              variant="contained"
              onClick={() => {
                navigation(Routes.CART)
                handleCloseCart()
              }}
            >
              IR PARA A SACOLA
            </Button>
          </StyledBagFooter>
        </>
      ) : (
        <StyledBagHeader>
          <h1>Seu carrinho está vazio :(</h1>
          <CloseIcon
            fontSize="large"
            htmlColor={palette.primary.dark}
            cursor="pointer"
            onClick={handleCloseCart}
          />
        </StyledBagHeader>
      )}
    </StyledBagWrapper>
  )
}

export default bag
