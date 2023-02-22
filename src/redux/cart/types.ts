export type CartItem = {
	id: number
	name: string
	discount: number
	memory: { value: number; size: number; price: number }
	color: { value: string; name: string; images: string[] }
}

export interface CartSliceState {
	totalPrice: number
	discount: number
	items: CartItem[]
}
