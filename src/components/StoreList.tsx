import StoreItem from './StoreItem'
import { useSelector } from 'react-redux'
import { selectFilterSlice } from '../redux/filter/selectors'

type Items = {
	id: number
	name: string
	price: number
	rating: number
	discount: number
	memory: [{ value: number; size: number; price: number }]
	colors: [{ value: string; name: string; images: string[] }]
	imageUrl: string
}

type StoreListProps = {
	items: Items[]
}

const StoreList: React.FC<StoreListProps> = ({ items }) => {
	const { minPrice } = useSelector(selectFilterSlice)
	return (
		<section className='store__list'>
			<div className='store__items'>
				{items
					.filter(item => item.price > Number(minPrice))
					.map(item => (
						<StoreItem key={item.id} {...item} />
					))}
			</div>
		</section>
	)
}

export default StoreList
