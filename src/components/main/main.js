import React from "react";
import "./main.scss";

import MainTyped from "./mainTyped";
import { FormattedMessage } from "react-intl";
// import ViewParticles from './particles';

const Main = () => {
  return (
		<section className="home">
			<div className="Main">
				{/* <ViewParticles/> */}
				<div className="main-contenedor">
					<p className="main-contenedor-title">
						<FormattedMessage id="main-texto1" />
					</p>
					<MainTyped />
					<p className="main-contenedor-text">
						{" "}
						<FormattedMessage id="main-texto2" />
					</p>
					<a className="main-contenedor-button" href="#">
						<FormattedMessage id="main-texto3" />
					</a>
				</div>
			</div>
		</section>
  );
};

export default Main;
