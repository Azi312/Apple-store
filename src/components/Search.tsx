import React from 'react'
import { BsSearch } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'
import { selectFilterSlice } from '../redux/filter/selectors'
import { setSearch } from '../redux/filter/slice'

const Search = () => {
	const { search } = useSelector(selectFilterSlice)
	const dispatch = useDispatch()

	const clearInput = () => {
		dispatch(setSearch(''))
	}
	return (
		<div className='header__input two'>
			<input
				className='input'
				value={search}
				onChange={e => dispatch(setSearch(e.target.value))}
				type='text'
				name='search'
				placeholder='search'
			/>
			<button onClick={clearInput} className='btn btn-search fa fa-search'>
				<BsSearch className='btn-icon' />
			</button>
		</div>
	)
}

export default Search
