export type Items = {
	id: number
	name: string
	price: number
	rating: number
	discount: number
	memory: [{ value: number; size: number; price: number }]
	colors: [{ value: string; name: string; images: string[] }]
	imageUrl: string
}

export interface Posts {
	currentPage: number
	category: string
	searchs: string
	sortById: string
	order: string
}
