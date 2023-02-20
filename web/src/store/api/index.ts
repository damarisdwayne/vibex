import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CreateProductInput, Product, UpdateProductInput } from '../types'

const API_URL = 'http://localhost:3000'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    createProduct: builder.mutation<Product, CreateProductInput>({
      query: product => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
    }),
    updateProduct: builder.mutation<Product, UpdateProductInput>({
      query: product => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: product,
      }),
    }),
    deleteProduct: builder.mutation<void, number>({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi
