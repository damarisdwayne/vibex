export interface ProductProps {
  id: number
  description: string
  image: string
  price: number
  quantity: number
}

export interface ProductResponse {
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
