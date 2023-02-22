import styled from 'styled-components'

export const StyledProductManagmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: calc(100vh - 20px);
  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 200px;
  }
`
