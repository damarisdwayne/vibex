import { Close } from '@mui/icons-material'
import { useEffect } from 'react'
import Modal from 'react-modal'
import Swal from 'sweetalert2'
import { useDeleteProductMutation } from '../../../store/api'
import { ProductProps } from '../../../store/types'
import Button from '../../button'

import { Container, TransactionTypeContainer } from './styles'

interface ModalDeleteProductProps {
  isOpen: boolean
  onRequestClose: () => void
  product: ProductProps
}
const ModalDeleteProduct = ({
  isOpen,
  onRequestClose,
  product,
}: ModalDeleteProductProps) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation()

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(product.id).unwrap()
      onRequestClose()
      Swal.fire('Produto detado', '', 'success').then(result => {
        if (result.isConfirmed) {
          window.location.reload()
        }
      })
    } catch (error) {
      console.log(`Error deleting product with ID ${product.id}:`, error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
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
      <Container>
        <h2>Deletar Produto</h2>

        <TransactionTypeContainer>
          <p>Tem certeza que deseja deletar o produto?</p>
        </TransactionTypeContainer>
        <div style={{ display: 'flex', gap: '20px', marginTop: 35 }}>
          <Button onClick={onRequestClose} fullWidth variant="outlined">
            Cancelar
          </Button>
          <Button
            onClick={handleDeleteProduct}
            fullWidth
            variant="contained"
            disabled={isLoading}
          >
            Confirmar
          </Button>
        </div>
      </Container>
    </Modal>
  )
}

export default ModalDeleteProduct
