import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductProps, ProductResponse } from '../types'

interface ProductsState {
  products: ProductProps[]
}

const initialState: ProductsState = {
  products: [{ id: 1, description: '', image: '', price: 0, quantity: 1 }],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductResponse[]>) => {
      state.products = action.payload
    },
    addProduct: (state, action: PayloadAction<ProductResponse>) => {
      state.products.push(action.payload)
    },
    updateProduct: (state, action: PayloadAction<ProductResponse>) => {
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
