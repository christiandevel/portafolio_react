import React from "react";
import "./main.scss";

import MainTyped from "./mainTyped";
import { FormattedMessage } from "react-intl";
import ViewParticles from './particles';

const Main = () => {
  return (
    <section className="home">
      <div className="main" id="main">
				{/* <div id="tsparticles" className="tsparticles"> */}
        	<ViewParticles/>
				{/* </div> */}
        <div className="main-contenedor">
          <p className="main-contenedor-title">
            <FormattedMessage id="main-greting" />
          </p>
          <MainTyped />
          <p className="main-contenedor-text">
            {" "}
            <FormattedMessage id="main-description" />
          </p>
          <a className="main-contenedor-button" href="#">
            <FormattedMessage id="main-button" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
