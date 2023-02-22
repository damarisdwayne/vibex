import styled from 'styled-components'
import { palette } from '../../../theme'

export const Container = styled.form`
  h2 {
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: ${palette.grayScale[500]};
    }
    & + input {
      margin-top: 1rem;
    }
  }

  > button {
    margin-top: 1rem;
  }
`
