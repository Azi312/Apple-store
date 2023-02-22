import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './scss/App.scss'
import Home from './pages/Home'
import Loading from './components/Loading'

const Header = React.lazy(
	() => import(/* webpackChunkName: "Header" */ './components/Header')
)
const Cart = React.lazy(
	() => import(/* webpackChunkName: "Cart" */ './pages/Cart')
)
const Item = React.lazy(
	() => import(/* webpackChunkName: "Item" */ './pages/Item')
)
const FormPage = React.lazy(
	() => import(/* webpackChunkName: "FormPage" */ './pages/FormPage')
)
const NotFound = React.lazy(
	() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound')
)

function App() {
	return (
		<div className='App'>
			<Suspense fallback={<Loading />}>
				<Header />
			</Suspense>
			<main className='main'>
				<div className='main__container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/Cart'
							element={
								<Suspense fallback={<Loading />}>
									<Cart />
								</Suspense>
							}
						/>
						<Route
							path='/Item'
							element={
								<Suspense fallback={<Loading />}>
									<Item />
								</Suspense>
							}
						/>
						<Route
							path='/FormPage'
							element={
								<Suspense fallback={<Loading />}>
									<FormPage />
								</Suspense>
							}
						/>
						<Route
							path='*'
							element={
								<Suspense fallback={<Loading />}>
									<NotFound />
								</Suspense>
							}
						/>
					</Routes>
				</div>
			</main>
		</div>
	)
}

export default App
