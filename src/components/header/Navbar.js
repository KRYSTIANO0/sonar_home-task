import React from 'react'

//components
import NavbarItem from './NavbarItem'

const navbar = [
	{ id: 'ae67bbbe-ad69-4355-bd5b-081365771157', name: '🏡 Home', href: '/' },
	{ id: '26e4a181-7331-4d86-bca7-7a956179b9c9', name: '🛰️ Launches', href: '/launches' },
	{ id: '802f24e8-d97d-4d5b-8eac-3bf849b144f7', name: '🚀 Rockets', href: '/rockets' },
	{ id: '36d2a313-edca-42ea-a779-482ea2520869', name: '🎯 Missions', href: '/missions' },
	{ id: '19b0b44d-1aad-4fea-8ff0-1b6c8935f022', name: '🚢 Ships', href: '/ships' },
]
const Navbar = () => {
	return (
		<nav>
			<ul>
				{navbar.map(navbarItem => {
					return <NavbarItem key={navbarItem.id} {...navbarItem} />
				})}
			</ul>
		</nav>
	)
}

export default Navbar
