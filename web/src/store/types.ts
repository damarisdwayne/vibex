export interface Product {
  id: number
  description: string
  image: string
  price: number
}

export interface CreateProductInput {
  description: string
  image: string
  price: number
}

export interface UpdateProductInput {
  id: number
  description: string
  image: string
  price: number
}
