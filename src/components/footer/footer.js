import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TitleSection from './../utils/titleSection'
import Icons from './components/Icons'
import Greetings from './components/greetings'

import './footer.scss'

const Footer = () => {
	return (
		<footer className="network">
			<TitleSection title="media"/>
			<Icons />
			<Greetings />
		</footer>
	)
}

export default Footer
