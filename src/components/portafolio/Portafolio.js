import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'




import { listPortafolio } from "./components/data";


import './portafolio.scss'

import ButtonLink from "../utils/buttonLink";
import TitleSection from '../utils/titleSection'

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
    setFilter(nuevo);
  };
	
	library.add(fab)

  return (
		<section className="portafolio">
			<TitleSection title="portafolio"/>
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
        {filter.map((proyecto, index) => (
					<div key={index} className="portafolio-images_caja" >
            <img  src={proyecto.src} />
					</div>
          
        ))}
      </div>
			
			<div>
				<div>
					Holaaa
					<span>
						<FontAwesomeIcon icon={["fab", "html5"]} />
						</span>
					<span>
					<FontAwesomeIcon icon={["fab", "github"]} />
						</span>
				</div>
			</div>
    </section>
  );
};

export default Portafolio;
