import { useSelector } from 'react-redux'
import { selectFilterSlice } from '../redux/filter/selectors'
import PersonalItem from '../components/PersonalItem/PersonalItem'

const Item = () => {
	const { personalData } = useSelector(selectFilterSlice)
	return (
		<>
			{personalData.map(item => (
				<PersonalItem key={item.id} {...item} />
			))}
		</>
	)
}

export default Item
