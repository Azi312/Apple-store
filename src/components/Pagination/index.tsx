import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Pagination.module.scss'
import { setCurrentPage } from '../../redux/filter/slice'
import { selectFilterSlice } from '../../redux/filter/selectors'

const Pagination: FC = () => {
	const { currentPage } = useSelector(selectFilterSlice)
	const dispatch = useDispatch()

	const onChangePage = (number: number) => {
		dispatch(setCurrentPage(number))
	}

	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={event => onChangePage(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			forcePage={currentPage - 1}
		/>
	)
}

export default Pagination
