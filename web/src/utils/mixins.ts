export const pxToRem = (px: number): string => `${px / 16}rem`

export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const formatNumber = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
