import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types'

interface ProductsState {
  products: Product[]
}

const initialState: ProductsState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id)
      state.products[index] = action.payload
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
  },
})

export default productsSlice.reducer

export const { setProducts, addProduct, updateProduct, deleteProduct } =
  productsSlice.actions
