import { Add } from '@mui/icons-material'
import Close from '@mui/icons-material/Close'
import { FormEvent, useEffect } from 'react'
import Modal from 'react-modal'
import Swal from 'sweetalert2'

import { useUpdateProductMutation } from '../../../store/api'
import { ProductProps, ProductRequest, ProductResponse } from '../../../store/types'
import Button from '../../button'

import { Container } from './styles'

interface ModalEditProductProps {
  isOpen: boolean
  onRequestClose: () => void
  product: ProductProps
}

const ModalEditProduct = ({ isOpen, onRequestClose, product }: ModalEditProductProps) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation()

  const handleAddProduct = (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    if (data.description === '' || data.image === '' || !data.price) {
      Swal.fire('Preencha os dados corretamente', '', 'error')
      return
    }

    const newProduct: ProductResponse = {
      id: product.id,
      description: data.description as string,
      image: data.image as string,
      price: data.price as unknown as number,
    }

    try {
      updateProduct(newProduct)
      onRequestClose()
      Swal.fire('Os dados do produto foram alterados', '', 'success').then(result => {
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
        <h2>Alterar dados do produto</h2>

        <input
          id="description"
          name="description"
          defaultValue={product.description}
          placeholder="Descrição"
        />
        <input
          id="image"
          name="image"
          type="text"
          defaultValue={product.image}
          placeholder="URL da imagem"
        />
        <input
          id="price"
          name="price"
          type="number"
          defaultValue={product.price}
          placeholder="Preço"
        />

        <Button fullWidth variant="contained" type="submit" disabled={isLoading}>
          <Add />
          ALTERAR DADOS
        </Button>
      </Container>
    </Modal>
  )
}

export default ModalEditProduct
