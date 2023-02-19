import { forwardRef, Ref } from 'react'

import { StyledVariantButton } from './styles'
import { ButtonProps } from './types'

const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
    const { children } = props

    return <StyledVariantButton {...{ ref, ...props }}>{children}</StyledVariantButton>
  },
)

export default Button
