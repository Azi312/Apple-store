import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/slice'
import { BsFillCircleFill } from 'react-icons/bs'
import styles from './PersonalItem.module.scss'
import PersonalSlider from './PersonalSlider'

type PersonalItemProps = {
	id: number
	name: string
	price: number
	discount: number
	memory: [{ value: number; size: number; price: number }]
	colors: [{ value: string; name: string; images: string[] }]
}

const PersonalItem: React.FC<PersonalItemProps> = ({
	id,
	name,
	price,
	discount,
	memory,
	colors,
}) => {
	const dispatch = useDispatch()

	const [activeMemory, setActiveMemory] = useState(...memory)
	const [activeColor, setActiveColor] = useState(...colors)

	const onClickItem = () => {
		const item = {
			id,
			name,
			price,
			discount,
			memory: activeMemory,
			color: activeColor,
		}
		dispatch(addItem(item))
	}

	return (
		<div className={styles.item}>
			<div className={styles.item__body}>
				<div className={styles.item__slider}>
					<PersonalSlider activeColor={activeColor} />
				</div>
				<div className={styles.item__content}>
					<div className={styles.content}>
						<h1 className={styles.content__title}>{name}</h1>
						<div className={styles.content__price}>
							Price: ${activeMemory.price}, <span>Discount - {discount}%</span>
						</div>
						<div className={styles.content__memory}>
							<h3> {activeMemory.size ? 'Case Size:' : 'Memory:'} </h3>
							<div className={styles.content__memory_items}>
								{memory.map((obj, i) => (
									<div
										onClick={() => setActiveMemory(obj)}
										className={
											activeMemory === obj
												? styles.content__memory_item_activeMemory
												: styles.content__memory_item
										}
										key={i}
									>
										{obj.size ? (
											<span>{obj.size}mm</span>
										) : (
											<span>
												{obj.value < 15 ? obj.value + 'tb' : obj.value + 'gb'}
											</span>
										)}

										<h4>${obj.price}</h4>
									</div>
								))}
							</div>
						</div>
						<div className={styles.content__color}>
							<h3>Color - {activeColor.name}</h3>
							<div className={styles.content__color_items}>
								{colors.map((obj, i) => (
									<BsFillCircleFill
										key={i}
										onClick={() => setActiveColor(obj)}
										className={activeColor === obj ? styles.activeColor : ''}
										style={{
											color: obj.value,
											borderRadius: '50%',
											padding: '3px',
											width: '43px',
											height: '43px',
											cursor: 'pointer',
										}}
									/>
								))}
							</div>
						</div>
						<button onClick={onClickItem}>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PersonalItem
