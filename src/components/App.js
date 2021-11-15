import React from "react";

import HeaderMenu from "./header/header";
import Main from './main/main';
import About from './about/About'
import Skills from './skills/Skills'
import Portafolio from './portafolio/Portafolio'
import Blog from './blog/Blog'

const App = () => {
  return (
    <>
      <HeaderMenu />
			<Main/>
			<About/>
			<Skills/>
			<Portafolio />
			<Blog />
    </>
  );
};

export default App;
