import React from 'react'
//styles
import styles from '../../styles/header/Header.module.css'
//components
import Navbar from './Navbar'
const Header = () => {
	return (
		<header className={styles['main-header']}>
			<Navbar />
			<div className={styles['logo']}>
				<h1>SonarHome</h1>
				<p>x</p>
				<h1>Krystian Domżałowicz</h1>
			</div>
		</header>
	)
}

export default Header
