import styled, { css } from 'styled-components'
import { palette } from '../../theme'
import { hexToRgba } from '../../utils'

interface ProductProps {
  variant: 'vertical' | 'bag' | 'product-managment'
}

export const StyledImageProductBox = styled.div`
  width: 190px;
  height: 190px;
  flex-shrink: 0;
`

export const StyledImageProduct = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`

export const StyledPriceProduct = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const StyledDescriptionProduct = styled.p`
  font-weight: 300;
  font-size: 14px;
`

export const StyledContentProduct = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  gap: 32px;
`

export const StyledProductButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  gap: 32px;

  > span {
    color: red;
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 4px;
  }
`

export const StyledProductManagmentButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 100%;
  gap: 16px;
`

export const StyledProductWrapper = styled.div<ProductProps>`
  ${({ variant }) => {
    return css`
      width: 100%;
      height: ${variant === 'vertical' ? 'auto' : '150px'};
      justify-content: space-between;
      padding: 16px;
      border: ${variant === 'vertical' ? `1px solid ${palette.primary.dark}` : 0};
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      box-shadow: 0px 18px 60px -30px ${hexToRgba(palette.secondary.main, 0.18)};

      &:hover {
        box-shadow: 0px 27px 100px -20px ${hexToRgba(palette.secondary.main, 0.18)},
          0px 18px 60px -30px ${hexToRgba(palette.secondary.main, 0.18)},
          0px 9px 30px -15px ${hexToRgba(palette.secondary.main, 0.18)},
          0px 4px 15px -10px ${hexToRgba(palette.secondary.main, 0.18)};
      }

      display: flex;
      align-items: center;
      flex-direction: ${variant === 'vertical' ? 'column' : 'row'};
      background-color: ${variant === 'vertical' ? palette.grayScale[800] : 'white'};
      gap: 32px;

      ${variant !== 'vertical' &&
      css`
        p {
          color: black;

          &:last-child {
            font-size: 16px;
          }
        }

        ${StyledImageProductBox} {
          width: 130px;
          height: 130px;
        }
      `}
    `
  }}
`
