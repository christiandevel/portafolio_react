import React from "react";

import HeaderMenu from "./header/header";
import Main from './main/main';
import About from './about/About'
import Skills from './skills/Skills'

const App = () => {
  return (
    <>
      <HeaderMenu />
			<Main/>
			<About/>
			<Skills/>
    </>
  );
};

export default App;
