import React from 'react'
import { useParams } from 'react-router-dom'
//styles
import styles from '../../../styles/data/DataDetail.module.css'
//components
import Loading from '../../ui-elements/loading/Loading'
import Error from '../../ui-elements/error/Error'
//hooks
import useGetDetail from '../../../hooks/useGetDetail'

const DataDetail = ({ type }) => {
	const { dataID } = useParams()
	const { data, loading, error } = useGetDetail(dataID, type)

	return (
		<section className={styles['launch-detail']}>
			{data && (
				<div>
					<h1>🛰️ {data.mission_name || data.name}</h1>
					{type === 'launches' && (
						<p>
							{data.launch_date_local} 🚀 {data.rocket.rocket_name}
						</p>
					)}
					<p>{data.details || data.description}</p>
					{type === 'launches' && <p>Succes {data.launch_success ? '✅' : '❌'}</p>}
					{type === 'ships' && (
						<>
							<p> {data.home_port}</p>
							<img src={data.image} />
						</>
					)}
				</div>
			)}

			{loading && <Loading />}
			{error && <Error />}
		</section>
	)
}

export default DataDetail
