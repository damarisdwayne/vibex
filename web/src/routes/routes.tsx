import { Home, Cart, ProductManagment } from '../pages'

export type DefaultRoutesProps = {
  path: string
  element: any
  exact?: boolean
  routes?: DefaultRoutesProps[]
}

export enum Routes {
  HOME = '/',
  CART = '/cart',
  PRODUCT_MANAGMENT = '/product-managment',
}

export const defaultRoutes: DefaultRoutesProps[] = [
  {
    path: Routes.HOME,
    element: <Home />,
    exact: true,
  },
  {
    path: Routes.CART,
    element: <Cart />,
    exact: true,
  },
  {
    path: Routes.PRODUCT_MANAGMENT,
    element: <ProductManagment />,
    exact: true,
  },
]
