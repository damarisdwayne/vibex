import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.div`
  h2 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #000;
  }

  p {
    color: #000;
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background-color: ${props =>
    props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`
