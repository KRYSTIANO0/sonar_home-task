import React from 'react'
//styles
import styles from '../../../styles/loading/Loading.module.css'
const Loading = () => {
	return (
		<div className={styles['lds-ring']}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Loading
