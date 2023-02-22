import { useEffect } from 'react'
import axios from 'axios'
import NotFound from './NotFound'
import {
	Categories,
	StoreList,
	Modal,
	Pagination,
	Sidebar,
	Loading,
} from '../components'

import { productsApi } from '../redux/productsApi/productsApi'
import { selectFilterSlice } from '../redux/filter/selectors'
import { useDispatch, useSelector } from 'react-redux'
import {
	setCategoryId,
	setSortType,
	setPersonalData,
} from '../redux/filter/slice'

const Home = () => {
	const {
		categoryId,
		search,
		sortType,
		currentPage,
		openModal,
		modalId,
		personalData,
	} = useSelector(selectFilterSlice)
	const dispatch = useDispatch()

	const category = categoryId > 0 ? `&category=${categoryId}` : ''
	const searchs = search ? `&q=${search}` : ''
	const sortById = sortType.sortProperty.replace('-', '')
	const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

	const {
		data: items,
		isLoading,
		error,
	} = productsApi.useGetItemsQuery({
		currentPage,
		category,
		searchs,
		sortById,
		order,
	})

	useEffect(() => {
		axios.get(`http://localhost:3001/items?id=${modalId}`).then(res => {
			dispatch(setPersonalData(res.data))
		})
	}, [modalId])

	if (error) {
		return <NotFound />
	}

	return (
		<>
			<div className='main__content'>
				<Sidebar onChangeSort={i => dispatch(setSortType(i))}>
					<Categories onChangeCategory={i => dispatch(setCategoryId(i))} />
				</Sidebar>
				{isLoading ? <Loading /> : <StoreList items={items!} />}
				{openModal &&
					personalData.map(item => <Modal key={item.id} {...item} />)}
			</div>
			<Pagination />
		</>
	)
}

export default Home
