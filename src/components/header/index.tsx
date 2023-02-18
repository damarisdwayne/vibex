import React from 'react'
import { Button } from '../button'
import Logo from '../../assets/logo.png'

import { StyledHeader, StyledHeaderWrapper } from './styles'

const header: React.FC = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <img src={Logo} />
        <Button variant="outlined" color="secondary">
          Gerenciar produtos
        </Button>
      </StyledHeader>
    </StyledHeaderWrapper>
  )
}

export default header
