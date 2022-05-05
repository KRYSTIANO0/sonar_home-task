import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//styles
import styles from '../../styles/data/DataList.module.css'
const DataList = ({ data, type, setFetchLimit, loading, hasMore, searchTerm }) => {
	let icon
	switch (type) {
		case 'launches':
			icon = '🛰️'
			break
		case 'rockets':
			icon = '🚀'
			break
		case 'missions':
			icon = '🎯'
			break
		case 'ships':
			icon = '🚢'
			break
	}
	//infinity loop
	const observer = useRef()
	const lastElement = useCallback(
		node => {
			if (loading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver(enteries => {
				if (enteries[0].isIntersecting && hasMore) {
					setFetchLimit(prevState => prevState + 30)
				}
			})
			if (node) observer.current.observe(node)
		},
		[loading, hasMore]
	)

	//
	return (
		<ul className={styles['launches-list']}>
			{data
				.filter(val => {
					if (searchTerm === '') {
						return val
					} else {
						if (type === 'launches') {
							if (val.mission_name.toLowerCase().includes(searchTerm.toLowerCase())) {
								return val
							}
						} else {
							if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
								return val
							}
						}
					}
				})
				.map((dataItem, index) => {
					if (data.length === index + 1) {
						return (
							<li key={dataItem.id} className={styles['launches-list-item']}>
								<Link to={`/${type}/${dataItem.id}`} ref={lastElement}>
									{icon}
									{dataItem.mission_name || dataItem.name}
								</Link>
							</li>
						)
					} else
						return (
							<li key={dataItem.id} className={styles['launches-list-item']}>
								<Link to={`/${type}/${dataItem.id}`}>
									{icon}
									{dataItem.mission_name || dataItem.name}
								</Link>
							</li>
						)
				})}
		</ul>
	)
}

export default DataList
