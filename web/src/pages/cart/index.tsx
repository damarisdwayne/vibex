import React from 'react'
import { Bag, Button, Product } from '../../components'
import { useAppSelector } from '../../store'
import { formatNumber } from '../../utils'

import { StyledCartWrapper, StyledProducts, StyledBoxRight } from './styles'

const Cart: React.FC = () => {
  const { items } = useAppSelector(state => state.cartState)

  let total = 0
  items.forEach(item => {
    total += item.price * item.quantity
  })

  return (
    <StyledCartWrapper>
      {items.length > 0 ? (
        <>
          <StyledProducts>
            {items.map((item, index) => (
              <Product key={index} variant="bag" product={item} />
            ))}
          </StyledProducts>
          <StyledBoxRight>
            <h2>Resumo</h2>
            <div>
              <p>Valor dos produtos:</p>
              <strong>{formatNumber(total)}</strong>
            </div>
            <div>
              <p>Frete</p>
              <strong>R$ 10,00</strong>
            </div>
            <div>
              <p>Total</p>
              <strong>{formatNumber(total + 10)}</strong>
            </div>
            <div>
              <Button variant="contained">IR PARA O PAGAMENTO</Button>
              <Button variant="outlined">CONTINUAR COMPRANDO</Button>
            </div>
          </StyledBoxRight>
        </>
      ) : (
        <h2>Seu Carrinho está vazio :(</h2>
      )}
    </StyledCartWrapper>
  )
}

export default Cart
