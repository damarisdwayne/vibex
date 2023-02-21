import styled from 'styled-components'
import { palette } from '../../theme'

export const StyledHeaderWrapper = styled.div`
  height: 70px;
  background-color: ${palette.primary.dark};
`
export const StyledHeader = styled.div`
  max-width: 1280px;
  padding: 26px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    flex-shrink: 0;
  }
`

export const StyledHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const StyledCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -4px;
  right: -3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  background-color: ${palette.grayScale[50]};
  color: ${palette.primary.dark};
`

export const StyledHeaderCartIcon = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 32px;
  cursor: pointer;

  > svg {
    transition: fill 0.2s ease-in-out;
    fill: ${palette.secondary.main};
  }

  &:hover {
    > svg {
      fill: ${palette.primary.main};
    }
  }
`
