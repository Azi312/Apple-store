import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/cart/slice'

type CartItemProps = {
	id: number
	index: number
	name: string
	memory: { value: number; size: number; price: number }
	color: { value: string; name: string; images: string[] }
}

const CartItem: React.FC<CartItemProps> = ({ index, name, memory, color }) => {
	const dispatch = useDispatch()

	const onClickRemove = () => {
		if (window.confirm('Are you sure, you want to remove?')) {
			dispatch(removeItem(index))
		}
	}

	return (
		<div className='cart__item item-cart'>
			<div className='item-cart__image'>
				<img src={color.images[0]} alt='' />
			</div>
			<div className='item-cart__content'>
				<h3 className='item-cart__title'>{name}</h3>
				<div className='item-cart__price'>Price: ${memory.price}</div>
				{memory.size ? (
					<div className='item-cart__memory'>
						<span>SizeCase: </span>
						{memory.size}mm
					</div>
				) : (
					<div className='item-cart__memory'>
						<span>Memory: </span>
						{memory.value > 20 ? memory.value + 'gb' : memory.value + 'tb'}
					</div>
				)}
				<div className='item-cart__color'>Color - {color.name}</div>
				<div className='item-cart__buttons'>
					<button onClick={onClickRemove} className='item-cart__button'>
						remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
