import { Button } from '..'
import { ShoppingCart } from '@mui/icons-material'
import Logo from '../../assets/logo.png'

import {
  StyledHeaderWrapper,
  StyledHeader,
  StyledHeaderButtons,
  StyledHeaderCartIcon,
  StyledCircle,
} from './styles'
import { useAppDispatch, useAppSelector } from '../../store'
import { handleCartState } from '../../store/slices'
import { useLocation, useNavigate } from 'react-router-dom'
import { Routes } from '../../routes/routes'

const header: React.FC = () => {
  const { isOpen, items } = useAppSelector(state => state.cartState)
  const dispatch = useAppDispatch()
  const navigation = useNavigate()
  const location = useLocation()

  const handleOpenCart = () => {
    dispatch(handleCartState(!isOpen))
  }

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <img
          src={Logo}
          onClick={() => navigation(Routes.HOME)}
          style={{ cursor: 'pointer' }}
        />
        <StyledHeaderButtons>
          {location.pathname === '/' ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigation(Routes.PRODUCT_MANAGMENT)}
            >
              Gerenciar produtos
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigation(Routes.HOME)}
            >
              Comprar produtos
            </Button>
          )}

          {location.pathname === '/' && (
            <StyledHeaderCartIcon onClick={handleOpenCart}>
              <StyledCircle>{items.length}</StyledCircle>
              <ShoppingCart fontSize="large" />
            </StyledHeaderCartIcon>
          )}
        </StyledHeaderButtons>
      </StyledHeader>
    </StyledHeaderWrapper>
  )
}

export default header
