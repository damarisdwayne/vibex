import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productsApi } from './api'
import { cartReducer, productReducer } from './slices'

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cartState: cartReducer,
  productState: productReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['userState', 'authState', 'enumeratorState'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([productsApi.middleware]),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
