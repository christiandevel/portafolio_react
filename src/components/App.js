import React from "react";

import HeaderMenu from "./header/header";
import Main from './main/main';
import About from './about/About'

const App = () => {
  return (
    <>
      <HeaderMenu />
			<Main/>
			<About/>
    </>
  );
};

export default App;
