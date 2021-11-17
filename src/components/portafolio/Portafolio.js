import React, { useState } from "react";


import { listPortafolio } from "./components/data";

import "./portafolio.scss";

import ButtonLink from "../utils/buttonLink";
import TitleSection from "../utils/titleSection";

import Icons from './components/Icons'

const Portafolio = () => {
  const [filter, setFilter] = useState(listPortafolio);

  const getFiltros = (arreglo) => {
    const setObj = new Set();
    return listPortafolio.reduce((arreglo, item) => {
      if (!setObj.has(item.filter)) {
        setObj.add(item.filter, item);
        arreglo.push(item);
      }
      return arreglo;
    }, []);
  };

  const handleFilter = (palabra) => {
		const nuevo = listPortafolio.filter((item) => item.filter === palabra);
		if(palabra === 'portafolio-all-filter'){
			setFilter(listPortafolio)
		}else{
			setFilter(nuevo);
		}
  };

  

  return (
    <section className="portafolio">
      <TitleSection title="portafolio-title" tipoTitle="global.title.singular"  />
      <div className="portafolio-filters">
        {getFiltros(listPortafolio).map((item, ind) => (
          <ButtonLink
            key={ind}
            text={item.filter}
            evento={() => handleFilter(item.filter)}
          />
        ))}
      </div>

      <div className="portafolio-images">
        {filter.filter(item => item.id !== 0).map((proyecto, index) => (
					<div className="portafolio-images_caja">
						<figure key={index} className="portafolio-images_figure">
							<img src={proyecto.src} alt="proyecto"/>
						</figure>
					</div>
        ))}
      </div>
			
			<Icons />

      
    </section>
  );
};

export default Portafolio;
