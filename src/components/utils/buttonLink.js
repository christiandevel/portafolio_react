import React from 'react'

import cv from './../../assets/Documents/HV_ChristianAndres_Desarrollador.pdf'

import './styles/buttonLink.scss'

const ButtonLink = (props) => {
	return (
		<>
			<a className="button-link" download={props.dowloand} href={props.href} onClick={props.evento} target={props.target}>
				{props.text}
			</a>
		</>
	)
}

export default ButtonLink
