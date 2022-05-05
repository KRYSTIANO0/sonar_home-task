import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetData = (fetchLimit, type) => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [hasMore, setHasMore] = useState(true)

	useEffect(() => {
		setData(null)
	}, [type])

	let QUERY
	switch (type) {
		case 'launches':
			QUERY = `{
				launchesPast(limit:${fetchLimit}) {
				  mission_name
				  id
				}
			  }`
			break
		case 'rockets':
			QUERY = `{
				rockets(limit:${fetchLimit}) {
				  name
				  id
				}
		  }`
			break
		case 'missions':
			QUERY = `{
				missions(limit:${fetchLimit}) {
				  name
				  id
				}
			  }`
			break
		case 'ships':
			QUERY = `{
				ships(limit:${fetchLimit}) {
				  name
				  id
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
				let arrayLength
				if (type === 'launches') {
					setData(res.data.data.launchesPast)
					arrayLength = res.data.data.launchesPast.length
				}
				if (type === 'rockets') {
					setData(res.data.data.rockets)
					arrayLength = res.data.data.rockets.length
				}
				if (type === 'missions') {
					setData(res.data.data.missions)
					arrayLength = res.data.data.missions.length
				}
				if (type === 'ships') {
					setData(res.data.data.ships)
					arrayLength = res.data.data.ships.length
				}
				// data limit
				if (arrayLength % 30 !== 0) {
					setHasMore(false)
				} else {
					setHasMore(true)
				}
				setLoading(false)
			})
			.catch(e => {
				setError(e.message)
				setLoading(false)
			})
	}, [fetchLimit, type, QUERY])
	return { data, loading, error, hasMore }
}

export default useGetData
