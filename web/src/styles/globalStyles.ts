import { createGlobalStyle } from 'styled-components'
import { palette } from '../theme'

export default createGlobalStyle`
  #root {
    padding:0 !important; ;
  }
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    color: ${palette.grayScale[50]};
    background: ${palette.grayScale[900]};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a:disabled, button:disabled {
    cursor: not-allowed;
  }
  a:enabled, button:enabled {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600 !important;
  }
  iframe[style*="z-index: 2147483647"] {
  display: none;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.react-modal-overlay {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: white;
    padding: 1.4rem;
    position: relative;
    border-radius: 0.5rem;
}
.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.8);
    }
}
`
