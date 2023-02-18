import { Home, Cart } from '../pages'

export type DefaultRoutesProps = {
  path: string
  element: any
  exact?: boolean
  routes?: DefaultRoutesProps[]
  meta?: any
}

export enum Routes {
  HOME = '/',
  Cart = '/cart',
}

export const defaultRoutes: DefaultRoutesProps[] = [
  {
    path: Routes.HOME,
    element: <Home />,
    exact: true,
    meta: {
      title: 'Home',
      requiresAuth: false,
    },
  },
  {
    path: Routes.Cart,
    element: <Cart />,
    exact: true,
    meta: {
      title: 'Carrinho',
      requiresAuth: false,
    },
  },
]
