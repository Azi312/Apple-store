import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Items, Posts } from './types'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: build => ({
		getItems: build.query<Items[], Posts>({
			query: ({ currentPage, category, searchs, sortById, order }) => ({
				url: `/items?_page=${currentPage}&_limit=8${category}&_sort=${sortById}&_order=${order}${searchs}`,
			}),
		}),
	}),
})

export const { useGetItemsQuery } = productsApi
