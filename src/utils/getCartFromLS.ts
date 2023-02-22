import { calcDiscount, calcTotalPrice } from './calcTPrice&Discount'

export const getCartFromLS = () => {
	const data = localStorage.getItem('cart')
	const items = data ? JSON.parse(data) : []
	const totalPrice = calcTotalPrice(items)
	const discount = calcDiscount(items)

	return {
		items,
		totalPrice,
		discount,
	}
}
