export type ButtonCSSProps = {
  color: string
  background: string
  border: string
}

export type ButtonBehaviorProps = {
  default: ButtonCSSProps
  hover: ButtonCSSProps
}

export type ButtonVariantProps = {
  contained: ButtonBehaviorProps
  outlined: ButtonBehaviorProps
}

export type Palette = {
  primary: {
    darker: string
    dark: string
    main: string
  }
  secondary: {
    light: string
    main: string
  }
  grayScale: {
    50: string
    500: string
    800: string
    900: string
  }
  buttons: {
    primary: ButtonVariantProps
    secondary: ButtonVariantProps
  }
}
