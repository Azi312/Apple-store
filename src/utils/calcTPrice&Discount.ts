import { CartItem } from '../redux/cart/types'

export const calcTotalPrice = (items: CartItem[]) => {
	return items.reduce((sum, obj) => obj.memory.price + sum, 0)
}
export const calcDiscount = (items: CartItem[]) => {
	return items.reduce(
		(sum, obj) => (obj.memory.price / 100) * obj.discount + sum,
		0
	)
}
