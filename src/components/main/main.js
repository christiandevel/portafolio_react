import React from 'react'
import './main.scss';

import MainTyped from './mainTyped';
import ViewParticles from './particles';

const Main = () => {
	return (
		<div className="Main">
			<ViewParticles/>
			<div className="main-contenedor">
				<p className="main-contenedor-title">Hi there</p>
				<MainTyped/>
				<p className="main-contenedor-text"> I have more than two years of experiencie working with different tecnologies a passion for development, never stop learning and coffe, let me show you some of my work.</p>
				<a className="main-contenedor-button" href="#">Hire me</a>
				
				
			</div>
		</div>
	)
}

export default Main
