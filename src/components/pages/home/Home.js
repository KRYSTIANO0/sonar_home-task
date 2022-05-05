import React from 'react'
//styles
import styles from '../../../styles/home/Home.module.css'
const Home = () => {
	return (
		<section className={styles['home']}>
			<h1>Welcome !</h1>
			<p>
				Website created for a recruitment task at <span>SonarHome</span> .
			</p>
		</section>
	)
}

export default Home
