import React, { forwardRef, Ref } from 'react'

import { StyledVariantButton } from './styles'
import { ButtonProps } from './types'

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
    const renderButton = () => {
      const { children } = props

      return (
        <StyledVariantButton data-testid="button-wrapper" {...{ ref, ...props }}>
          {children}
        </StyledVariantButton>
      )
    }

    return renderButton()
  },
)

Button.displayName = 'Button'

export default Button
