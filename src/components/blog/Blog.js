import React from 'react'

import './blog.scss';

import TitleSection from './../utils/titleSection'
import CajaBlog from './components/cajaBlog'

const Blog = () => {
	return (
		<>
			<TitleSection title="notes"/>
			<CajaBlog/>
			
		</>
	)
}

export default Blog
