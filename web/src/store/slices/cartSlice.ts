import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductProps } from '../types'

interface CartState {
  isOpen: boolean
  items: ProductProps[]
}

const initialState: CartState = {
  isOpen: false,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleCartState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    incrementItemQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity! += 1
      }
    },
    decrementItemQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity! > 1) {
        item.quantity! -= 1
      }
    },
    addItemCart(state, action: PayloadAction<ProductProps>) {
      const { id } = action.payload
      const existingItem = state.items.find(item => item.id === id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItemCart(state, action: PayloadAction<number>) {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
  },
})

export default cartSlice.reducer

export const {
  handleCartState,
  addItemCart,
  incrementItemQuantity,
  decrementItemQuantity,
  removeItemCart,
} = cartSlice.actions
