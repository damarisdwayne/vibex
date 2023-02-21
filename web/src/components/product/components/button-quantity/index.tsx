import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../store'
import { decrementItemQuantity, incrementItemQuantity } from '../../../../store/slices'

import { StyledButtonQuantityWrapper } from './styles'

interface ButtonQuantityProps {
  quantity: number
  index: number
}

export const ButtonQuantity: React.FC<ButtonQuantityProps> = ({ quantity, index }) => {
  const [value, setValue] = useState(quantity)
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    const newValue = value + 1
    dispatch(incrementItemQuantity(index))
    setValue(newValue)
  }

  const handleDecrement = () => {
    const newValue = Math.max(value - 1, 0)
    dispatch(decrementItemQuantity(index))
    setValue(newValue)
  }

  useEffect(() => {
    setValue(quantity)
  }, [quantity])

  return (
    <StyledButtonQuantityWrapper>
      <button onClick={handleDecrement}>-</button>
      <input value={value} onChange={e => setValue(Number(e.target.value))} />
      <button onClick={handleIncrement}>+</button>
    </StyledButtonQuantityWrapper>
  )
}
