import React, { useEffect, useState } from 'react'
//styles
import styles from '../../../styles/data/Data.module.css'
//components
import Loading from '../../ui-elements/loading/Loading'
import Error from '../../ui-elements/error/Error'
import DataList from '../../data/DataList'
//hooks
import useGetData from '../../../hooks/useGetData'

const Data = ({ type }) => {
	const [fetchLimit, setFetchLimit] = useState(30)
	const [searchTerm, setSearchTerm] = useState('')

	const { data, loading, error, hasMore } = useGetData(fetchLimit, type)

	const onSearchHandler = e => {
		setSearchTerm(e.target.value)
	}
	return (
		<section className={styles['container']}>
			<div className={styles['content']}>
				<input className={styles['search-input']} type='text' placeholder='Search...' onChange={onSearchHandler} />
				{data && (
					<DataList
						type={type}
						hasMore={hasMore}
						loading={loading}
						data={data}
						setFetchLimit={setFetchLimit}
						searchTerm={searchTerm}
					/>
				)}
				{loading && <Loading />}
				{error && <Error message={error} />}
				{type === 'launches' && !hasMore && !loading && <h1>no more data</h1>}
			</div>
		</section>
	)
}

export default Data
