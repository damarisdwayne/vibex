import styled from 'styled-components'
import { palette } from '../../theme'
import { hexToRgba } from '../../utils'

export const StyledProductWrapper = styled.div`
  padding: 16px;
  max-width: 300px;
  height: auto;
  border: 1px solid ${palette.primary.dark};
  border-radius: 8px;
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
  flex-direction: column;
  gap: 32px;
  background-color: ${palette.grayScale[800]};
`

export const StyledImageProductBox = styled.div`
  width: 100%;
`

export const StyledImageProduct = styled.img`
  width: 100%;
`

export const StyledPriceProduct = styled.div`
  font-size: 20px;
  font-weight: 700;
`

export const StyledDescriptionProduct = styled.div`
  font-weight: 300;
  font-size: 14px;
`
