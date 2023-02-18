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
