import styled from 'styled-components'

export const StyledButtonQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 100px;

  > button {
    border: 0;
    background-color: transparent;
    width: 100%;
    padding: 2px;
  }

  > input {
    width: 100%;
    background-color: transparent;
    text-align: center;
    border: 0;
  }
`
