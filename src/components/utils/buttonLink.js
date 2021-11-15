import React from 'react'

import './styles/buttonLink.scss'

const ButtonLink = (props) => {
	return (
		<>
			<a className="button-link" download={props.dowloand} href={props.href} onClick={props.evento}>
				{props.text}
			</a>
		</>
	)
}

export default ButtonLink
