export type PersonalDataItem = {
	id: number
	name: string
	category: number
	price: number
	rating: number
	discount: number
	slides: string[]
	info: [{ icon: string; text: string }]
	memory: [{ value: number; size: number; price: number }]
	colors: [{ value: string; name: string; images: string[] }]
	imageUrl: string
}

export type SortType = {
	name: string
	sortProperty: string
}

export interface FilterSliceState {
	categoryId: number
	search: string
	currentPage: number
	maxPrice: string
	minPrice: string
	openModal: boolean
	modalId: number
	personalData: PersonalDataItem[]
	sortType: SortType
}
