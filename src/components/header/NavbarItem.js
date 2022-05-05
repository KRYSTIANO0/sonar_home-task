import React from 'react'
//router
import { NavLink } from 'react-router-dom'
//styles
import styles from '../../styles/header/NavbarItem.module.css'
const NavbarItem = ({ name, href }) => {
	return (
		<li className={styles['nav-list-item']}>
			<NavLink className={styles['nav-link']} to={href}>
				{name}
			</NavLink>
		</li>
	)
}

export default NavbarItem
