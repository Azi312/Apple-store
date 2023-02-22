import { HiStar } from 'react-icons/hi'

import { useDispatch } from 'react-redux'
import { setOpenModal, setModalId } from '../redux/filter/slice'

type StoreItemProps = {
	id: number
	name: string
	price: number
	rating: number
	imageUrl: string
}

const StoreItem: React.FC<StoreItemProps> = ({
	id,
	name,
	price,
	imageUrl,
	rating,
}) => {
	const dispatch = useDispatch()

	const openModal = (id: number) => {
		if (id === id) {
			dispatch(setOpenModal(true))
			dispatch(setModalId(id))
		}
	}

	return (
		<div className='item-store'>
			<button onClick={() => openModal(id)} className='item-store__button'>
				take a closer look
			</button>
			<div className='item-store__image'>
				<img src={imageUrl} alt='' />
			</div>
			<div className='item-store__content'>
				<h3 className='item-store__name'>
					<strong>{name}</strong>
				</h3>
				<div className='item-store__item'>
					<div className='item-store__price'>
						From <span> ${price}</span>
					</div>
					<div className='item-store__rating'>
						<HiStar className='item-store__rating-star' />
						<span>{rating}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StoreItem
