import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CartEmpty.module.scss'

import LogoSvg from '../../assets/images/cart-is-empty.svg'

const CartEmpty: React.FC = () => {
	return (
		<div className={styles.content}>
			<h2 className={styles.title}>
				Your bag is empty <span>😕</span>
			</h2>
			<img src={LogoSvg} alt='Empty cart' />
			<Link to='/' className={styles.button}>
				Continue Shopping
			</Link>
		</div>
	)
}

export default CartEmpty
