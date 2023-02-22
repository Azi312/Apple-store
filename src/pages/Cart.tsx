import { useDispatch, useSelector } from 'react-redux'
import CartEmpty from '../components/CartEmpty'
import CartItem from '../components/CartItem'
import { selectCartItems } from '../redux/cart/selectors'
import { clearItem } from '../redux/cart/slice'

const Cart: React.FC = () => {
	const { items, totalPrice, discount } = useSelector(selectCartItems)
	const dispatch = useDispatch()

	const totalAmount = totalPrice - discount

	const clearItems = () => {
		if (window.confirm('Are you sure, you realy want to clear everythving?')) {
			dispatch(clearItem())
		}
	}

	if (items.length === 0) {
		return <CartEmpty />
	}

	return (
		<div className='cart'>
			<div className='cart__container'>
				<h1 className='cart__title'>Your cart</h1>
				<div className='cart__content'>
					<div className='cart__list'>
						{items.map((item, i) => (
							<CartItem key={i} {...item} index={i} />
						))}
						<div className='cart__list-footer'>
							<button onClick={clearItems}>Clear All</button>
							<button>Place Order</button>
						</div>
					</div>
					<div className='cart__details cart-details'>
						<h3 className='cart-details__title'>Price details</h3>
						<div className='cart-details__content'>
							<div className='cart-details__price details'>
								<h4>Price ({items.length} items)</h4>
								<span>${totalPrice}</span>
							</div>
							<div className='cart-details__discount details'>
								<h4>Discount</h4>
								<span>− ${discount}</span>
							</div>
							<div className='cart-details__delivery details'>
								<h4>Delivery Charges</h4>
								<span>Free</span>
							</div>
							<div className='cart-details__total-amount details'>
								<h4>Total Amount</h4>
								<span>${totalAmount}</span>
							</div>
							<div className='cart-details__text'>
								You will save ${discount} on this order
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
