import React, { Suspense } from 'react'
//router
import { Routes, Route, Navigate } from 'react-router-dom'
//components
import Header from './components/header/Header'
import Loading from './components/ui-elements/loading/Loading'
//pages
const Home = React.lazy(() => import('./components/pages/home/Home'))
const Data = React.lazy(() => import('./components/pages/data/Data'))
const DataDetail = React.lazy(() => import('./components/pages/data/DataDetail'))

const App = () => {
	return (
		<main>
			<Header />
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/launches' element={<Data type='launches' />} />
					<Route path='/launches/:dataID' element={<DataDetail type='launches' />} />

					<Route path='/rockets' element={<Data type='rockets' />} />
					<Route path='/rockets/:dataID' element={<DataDetail type='rockets' />} />

					<Route path='/missions' element={<Data type='missions' />} />
					<Route path='/missions/:dataID' element={<DataDetail type='missions' />} />

					<Route path='/ships' element={<Data type='ships' />} />
					<Route path='/ships/:dataID' element={<DataDetail type='ships' />} />

					<Route path='/*' element={<Navigate to='/' replace />} />
				</Routes>
			</Suspense>
		</main>
	)
}

export default App
