import { Palette } from './types'

export const primary: Palette['primary'] = {
  darker: '#4d1b96',
  dark: '#581fab',
  main: '#7f3fdd',
}

export const secondary: Palette['secondary'] = {
  light: '#00B2C0',
  main: '#129EB4',
}

export const grayScale: Palette['grayScale'] = {
  50: '#FFFFFF',
  500: '#9B9285',
  800: '#1C1E1F',
  900: '#1A1C1D',
}

export const buttons: Palette['buttons'] = {
  primary: {
    contained: {
      default: {
        color: grayScale[50],
        background: primary.dark,
        border: primary.dark,
      },
      hover: {
        color: grayScale[50],
        background: secondary.main,
        border: secondary.main,
      },
    },
    outlined: {
      default: {
        color: grayScale[50],
        background: 'transparent',
        border: primary.main,
      },
      hover: {
        color: grayScale[50],
        background: 'transparent',
        border: secondary.main,
      },
    },
  },
  secondary: {
    contained: {
      default: {
        color: grayScale[50],
        background: secondary.main,
        border: secondary.main,
      },
      hover: {
        color: grayScale[50],
        background: primary.main,
        border: primary.main,
      },
    },
    outlined: {
      default: {
        color: grayScale[50],
        background: 'transparent',
        border: secondary.main,
      },
      hover: {
        color: grayScale[50],
        background: 'transparent',
        border: primary.main,
      },
    },
  },
}

export const palette: Palette = {
  primary,
  secondary,
  grayScale,
  buttons,
}
