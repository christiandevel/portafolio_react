import React, { useContext, useState } from "react";
import { opcionesMenu } from "./data";

import './header.scss';
import { FormattedMessage } from "react-intl";
import { langContext } from "./../../context/langContext";

import HeaderTitle from "./headerTitle";

import eng from './../../assets/eng.png'
import esp from './../../assets/esp.png'

const HeaderMenu = () => {
	
	const [open, setOpen] = useState('')
	const [close, setClose] = useState('')
	
	const toogleMenu = () => {
		console.log('Cambiando la visualizacion del Menu')
		console.log(open);
		if (open == ''){
			setOpen('show')
			setClose('close')
		}else {
			setOpen('')
			setClose('')
		}
		
	}
	
  const idioma = useContext(langContext);

  return (
    <header className="header">
      <HeaderTitle />
			<div  className={`header-menu ${open}`}>
				<nav>
					<ul className="header-menu_links">
						{opcionesMenu.map((opcion) => (
							<a  key={opcion.id} href="#">
								<FormattedMessage
									id={opcion.int}
									defaultMessage={opcion.default}
								/>
							</a>
						))}
					</ul>
				</nav>
				<div className="header-lenguajes">
					
					<button onClick={() => idioma.establecerLenjuage("es-MX")}>
						<img src={esp}/>
					</button>
					<button onClick={() => idioma.establecerLenjuage("en-US")}>
						<img src={eng}/>
					</button>
				</div>
				
			</div>
			
			<div className={`header-button ${close}`} onClick={toogleMenu}>
				<button>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
				
    </header>
  );
};

export default HeaderMenu;
