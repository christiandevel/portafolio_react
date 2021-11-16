import React from 'react'

import './blog.scss';

import TitleSection from './../utils/titleSection'
import CajaBlog from './components/cajaBlog'

const Blog = () => {
	return (
		<>
		<section className="notes">
			<TitleSection title="notes"/>
			<CajaBlog/>
		</section>
			
		</>
	)
}

export default Blog
