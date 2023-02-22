import { Add } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Button, Product } from '../../components'
import { ModalAddProduct } from '../../components/modals'
import { useAppDispatch, useAppSelector } from '../../store'
import { useGetProductsQuery } from '../../store/api'
import { setProducts } from '../../store/slices'

import { StyledProductManagmentWrapper } from './styles'

const productManagment: React.FC = () => {
  const { products } = useAppSelector(state => state.productState)
  const dispatch = useAppDispatch()
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const { data } = useGetProductsQuery()

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data))
    }
  }, [data, products])

  return (
    <StyledProductManagmentWrapper>
      <div>
        <Button
          onClick={() => setModalAddIsOpen(true)}
          variant="contained"
          customStyles={{ alignSelf: 'flex-end' }}
        >
          <Add />
          Criar novo produto
        </Button>
        {products.map((item, index) => (
          <Product key={index} variant="product-managment" product={item} />
        ))}
        <ModalAddProduct
          {...{
            isOpen: modalAddIsOpen,
            onRequestClose: () => setModalAddIsOpen(false),
          }}
        />
      </div>
    </StyledProductManagmentWrapper>
  )
}

export default productManagment
