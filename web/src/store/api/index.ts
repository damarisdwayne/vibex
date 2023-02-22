import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CreateProductInput, ProductProps, UpdateProductInput } from '../types'

const API_URL = process.env.PORT

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getProducts: builder.query<ProductProps[], void>({
      query: () => '/products',
    }),
    createProduct: builder.mutation<ProductProps, CreateProductInput>({
      query: product => ({
        url: '/product',
        method: 'POST',
        body: product,
      }),
    }),
    updateProduct: builder.mutation<ProductProps, UpdateProductInput>({
      query: product => ({
        url: `/product/${product.id}`,
        method: 'PUT',
        body: product,
      }),
    }),
    deleteProduct: builder.mutation<void, number>({
      query: productId => ({
        url: `/product/${productId}`,
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
