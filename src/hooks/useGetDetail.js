import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetDetail = (detailID, type) => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	let QUERY
	switch (type) {
		case 'launches':
			QUERY = `{
				launch(id: ${detailID}) {
				  mission_name
				  rocket {
					rocket_name
				  }
				  launch_date_local
				  launch_success
				  details
				}
			  }`
			break
		case 'rockets':
			QUERY = `{
				rocket(id: "${detailID}") {
				  name
				  description
				}
		  }`
			break
		case 'missions':
			QUERY = `{
				mission(id: "${detailID}") {
				  name
				  description
				}
			  }`
			break
		case 'ships':
			QUERY = `{
				ship(id: "${detailID}") {
				  name
				  home_port
				  image
				}
			  }`
			break
	}

	useEffect(() => {
		setLoading(true)
		axios({
			method: 'POST',
			url: 'https://api.spacex.land/graphql/',
			data: {
				query: QUERY,
			},
		})
			.then(res => {
				if (type === 'launches') {
					setData(res.data.data.launch)
				}
				if (type === 'rockets') {
					setData(res.data.data.rocket)
				}
				if (type === 'missions') {
					setData(res.data.data.mission)
				}
				if (type === 'ships') {
					setData(res.data.data.ship)
				}
				setLoading(false)
			})
			.catch(e => {
				setError(e.message)
				setLoading(false)
			})
	}, [])
	return { data, loading, error }
}

export default useGetDetail
