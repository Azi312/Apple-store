import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from '../redux/filter/slice'
import { selectCartItems } from '../redux/cart/selectors'

import logo from '../assets/images/apple.svg'
import { BsBag } from 'react-icons/bs'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import Search from './Search'

const Header = () => {
	const { items } = useSelector(selectCartItems)
	const dispatch = useDispatch()

	const isMounted = React.useRef(false)

	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items)
			localStorage.setItem('cart', json)
		}
		isMounted.current = true
	}, [items])

	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__content'>
					<Link
						to='/'
						onClick={() => dispatch(setOpenModal(false))}
						className='header__logo'
					>
						<img src={logo} alt='' />
						<h3>Store</h3>
					</Link>
					<Search />
					<div className='header__block'>
						<Link to='/FormPage' className='header__title'>
							Login
						</Link>
						<Link to='/cart' className='header__cart'>
							<BsBag className='header__cart-icon' />
							<h3>
								<span
									style={items.length > 9 ? { right: '16%' } : { right: '30%' }}
								>
									{items.length}
								</span>
							</h3>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
