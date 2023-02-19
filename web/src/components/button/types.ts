import { ButtonHTMLAttributes } from 'react'
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components'
import { ButtonVariantProps, Palette } from '../../theme/types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof ButtonVariantProps
  color?: keyof Palette['buttons']
  onClick?: (params?: any) => void
  fullWidth?: boolean
  isSmall?: boolean
  isLoading?: boolean
  customStyles?: CSSObject | FlattenSimpleInterpolation
}
