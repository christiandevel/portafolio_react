import React from 'react'
import { Link } from 'react-scroll'


const HeaderTitle = () => {
	return (
		<>
			<div className="header-logo">
				<Link key="christian" to="home" smooth={true} duration={3000} spy={true}>
					Christian
				</Link>
			</div>
		</>
	)
}

export default HeaderTitle
