import { Add, Close } from '@mui/icons-material'
import { FormEvent, useEffect } from 'react'
import Modal from 'react-modal'
import Swal from 'sweetalert2'

import { useCreateProductMutation } from '../../../store/api'
import { ProductRequest } from '../../../store/types'
import Button from '../../button'

import { Container } from './styles'

interface ModalAddProductProps {
  isOpen: boolean
  onRequestClose: () => void
}

const ModalAddProduct = ({ isOpen, onRequestClose }: ModalAddProductProps) => {
  const [createProduct, { isLoading }] = useCreateProductMutation()

  const handleAddProduct = (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    if (data.description === '' || data.image === '' || !data.price) {
      Swal.fire('Preencha os dados corretamente', '', 'error')
      return
    }

    const product: ProductRequest = {
      description: data.description as string,
      image: data.image as string,
      price: data.price as unknown as number,
    }

    try {
      createProduct(product)
      onRequestClose()
      Swal.fire('Produto adicionado', '', 'success').then(result => {
        if (result.isConfirmed) {
          window.location.reload()
        }
      })
    } catch (error) {
      console.log(`Error creating product ${product.description}:`, error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Close
        htmlColor="black"
        cursor="pointer"
        fontSize="large"
        onClick={onRequestClose}
        className="react-modal-close"
      />

      <Container onSubmit={handleAddProduct}>
        <h2>Adicionar produto</h2>

        <input id="description" name="description" placeholder="Descrição" />
        <input id="image" name="image" type="text" placeholder="URL da imagem" />
        <input id="price" name="price" type="number" placeholder="Preço" />

        <Button fullWidth variant="contained" type="submit" disabled={isLoading}>
          <Add />
          ADICIONAR
        </Button>
      </Container>
    </Modal>
  )
}

export default ModalAddProduct
