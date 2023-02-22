import { Component } from 'react'
import Slider from 'react-slick'
import styles from './PersonalItem.module.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

type PersonalSliderProps = {
	activeColor: { value: string; name: string; images: string[] }
}

function SampleNextArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles.slide__next} onClick={onClick}>
			<IoIosArrowForward />
		</div>
	)
}

function SamplePrevArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles.slide__prev} onClick={onClick}>
			<IoIosArrowBack />
		</div>
	)
}

export default class PersonalSlider extends Component<PersonalSliderProps> {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		}
		return (
			<>
				<Slider {...settings}>
					{this.props.activeColor.images.map(item => (
						<div key={item}>
							<img src={item} alt='' />
						</div>
					))}
				</Slider>
			</>
		)
	}
}
