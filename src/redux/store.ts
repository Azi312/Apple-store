import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/slice'
import filterSlice from './filter/slice'
import { productsApi } from './productsApi/productsApi'

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		cart: cartSlice,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: getDefoultMiddleware =>
		getDefoultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
