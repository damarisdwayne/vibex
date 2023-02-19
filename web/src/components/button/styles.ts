import { palette } from '../../theme'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ButtonProps } from './types'
import { ButtonBehaviorProps } from '../../theme/types'
import { pxToRem } from '../../utils'

export const StyledMasterButton = styled.button<ButtonProps>`
  ${({
    fullWidth = false,
    customStyles = {},
  }: Partial<ButtonProps>): FlattenSimpleInterpolation => {
    return css`
    display: block;
      font-weight: 600;
      font-size: ${pxToRem(14)};
      font-family: 'Roboto', sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 12px;
      align-items: center;
      transition: all 0.2s ease-in-out;
      width: ${fullWidth ? '100%' : 'auto'};
      border-radius: 4px;
      padding: 8px 16px;

      &:active {
        transform: scale(0.98);
        
      ${{ ...customStyles }} 
      
      @media print {
        display: none;
      }
    `
  }}
`

export const StyledVariantButton = styled(StyledMasterButton)<ButtonProps>`
  ${({
    color = 'primary',
    variant = 'contained',
    customStyles = {},
  }: Partial<ButtonProps>): FlattenSimpleInterpolation => {
    const buttonProps = palette.buttons[color]
    const colorPalette = buttonProps[variant] as ButtonBehaviorProps

    return css`
      position: 'relative';
      background-color: ${colorPalette.default.background};
      color: ${colorPalette.default.color};
      border: 2px solid ${colorPalette.default.border};
      &:hover {
        background-color: ${colorPalette.hover.background};
        color: ${colorPalette.hover.color};
        border: 2px solid ${colorPalette.hover.border};
      }
      ${{ ...customStyles }}
    `
  }}
`
