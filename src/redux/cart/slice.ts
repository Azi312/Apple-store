import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calcDiscount, calcTotalPrice } from '../../utils/calcTPrice&Discount'
import { getCartFromLS } from '../../utils/getCartFromLS'
import { CartItem, CartSliceState } from './types'

const { items, totalPrice, discount } = getCartFromLS()

const initialState: CartSliceState = {
	totalPrice: totalPrice,
	discount: discount,
	items: items,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItem>) {
			state.items.push(action.payload)

			state.totalPrice = calcTotalPrice(state.items)
			state.discount = calcDiscount(state.items)
		},

		removeItem(state, action: PayloadAction<number>) {
			state.items = state.items.filter((obj, index) => index !== action.payload)

			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.memory.price - sum
			}, 0)
			state.discount = state.items.reduce((sum, obj) => {
				return (obj.memory.price / 100) * obj.discount - sum
			}, 0)
		},

		clearItem(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const { addItem, removeItem, clearItem } = cartSlice.actions
export default cartSlice.reducer
