import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Component } from 'react'
import Slider from 'react-slick'

type SliderProps = {
	slides: string[]
}

function SampleNextArrow(props: any) {
	const { onClick } = props
	return (
		<div className='slide__next' onClick={onClick}>
			<IoIosArrowForward />
		</div>
	)
}

function SamplePrevArrow(props: any) {
	const { onClick } = props
	return (
		<div className='slide__prev' onClick={onClick}>
			<IoIosArrowBack />
		</div>
	)
}

export default class SimpleSlider extends Component<SliderProps> {
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
			<Slider {...settings}>
				{this.props.slides.map(item => (
					<div key={item}>
						<img src={item} alt='' />
					</div>
				))}
			</Slider>
		)
	}
}
