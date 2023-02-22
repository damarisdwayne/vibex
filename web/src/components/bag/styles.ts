import styled from 'styled-components'
import { palette } from '../../theme'
import { hexToRgba } from '../../utils'

interface BagProps {
  isOpen?: boolean
}

export const StyledBagWrapper = styled.div<BagProps>`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 70px;
  right: 0;
  width: 450px;
  height: calc(100vh - 70px);
  z-index: 190;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.32s ease-in-out;
  box-shadow: 0px 18px 60px -30px ${hexToRgba(palette.grayScale[900], 0.18)};
  background-color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`

export const StyledBagHeader = styled.div`
  width: 100%;
  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${palette.primary.dark};

  > h1 {
    font-size: 24px;
  }
`

export const StyledBagProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
  margin-top: 16px;
  overflow-y: auto;
`

export const StyledBagFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  gap: 16px;
  box-shadow: 0 -3px 3px rgb(0 0 0 / 10%);
  margin-top: auto;

  p,
  strong {
    color: ${palette.grayScale[900]};
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`
