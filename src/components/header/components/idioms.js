import React, {useContext} from "react";

import eng from "./../../../assets/eng.png";
import esp from "./../../../assets/esp.png";

import { langContext } from "./../../../context/langContext";

const Idioms = (props) => {
	
	const idioma = useContext(langContext);
	
  return (
    <>
      <div className="header-lenguajes">
        <button onClick={() => idioma.establecerLenjuage("es-MX")}>
          <img src={esp} />
        </button>
        <button onClick={() => idioma.establecerLenjuage("en-US")}>
          <img src={eng} />
        </button>
      </div>
    </>
  );
};

export default Idioms;
