import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMinPrice } from '../redux/filter/slice'
import { IoIosArrowDown } from 'react-icons/io'
import { selectFilterSlice } from '../redux/filter/selectors'

type SortItem = {
	name: string
	sortProperty: string
}

type SidebarProps = {
	onChangeSort: (index: SortItem) => void
	children: React.ReactNode
}

export const rating: SortItem[] = [
	{ name: 'Highest', sortProperty: 'rating' },
	{ name: 'Lowest', sortProperty: '-rating' },
]
export const price: SortItem[] = [
	{ name: 'Highest', sortProperty: 'price' },
	{ name: 'Lowest', sortProperty: '-price' },
]

const Sidebar: FC<SidebarProps> = ({ onChangeSort, children }) => {
	const { minPrice } = useSelector(selectFilterSlice)
	const dispatch = useDispatch()

	const onClickSort = (index: SortItem) => {
		onChangeSort(index)
	}

	return (
		<aside className='sidebar'>
			<div className='sidebar__item'>{children}</div>
			<div className='sidebar__item'>
				<h3>
					Rating <IoIosArrowDown className='sidebar__item-arrow' />
				</h3>
				{rating.map((obj, i) => (
					<div key={i}>
						<input
							className='styled-checkbox'
							onClick={() => onClickSort(obj)}
							id={obj.sortProperty}
							name='rating'
							type='radio'
						/>
						<label htmlFor={obj.sortProperty}>
							<span>{obj.name}</span>
						</label>
					</div>
				))}
			</div>
			<div className='sidebar__item'>
				<h3>
					Price <IoIosArrowDown className='sidebar__item-arrow' />
				</h3>
				{price.map((obj, i) => (
					<div key={i}>
						<input
							className='styled-checkbox'
							onClick={() => onClickSort(obj)}
							id={obj.sortProperty}
							name='price'
							type='radio'
						/>
						<label htmlFor={obj.sortProperty}>
							<span>{obj.name}</span>
						</label>
					</div>
				))}
				<form onSubmit={e => e.preventDefault()} className='sidebar__form'>
					<div>
						<input
							className='sidebar__input'
							value={minPrice}
							onChange={e => dispatch(setMinPrice(e.target.value))}
							placeholder='$ min-price'
							type='text'
							id='minPrice'
							name='minPrice'
							required
						/>
					</div>
				</form>
			</div>
		</aside>
	)
}

export default Sidebar
