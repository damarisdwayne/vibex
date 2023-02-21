import styled from 'styled-components'
import { palette } from '../../theme'

export const StyledCartWrapper = styled.div`
  position: relative;
  padding: 16px;
  display: flex;
  gap: 16px;

  > h2 {
    margin: auto;
  }
`

export const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 8px;
`
export const StyledBoxRight = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 4px;
  padding: 16px;

  > h2 {
    color: ${palette.primary.dark};
    text-transform: uppercase;
    font-size: 20px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    &:last-child {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 48px;
    }

    p,
    strong {
      color: #000;
    }

    p {
      font-size: 14px;
      color: ${palette.grayScale[500]};
    }
  }
`
