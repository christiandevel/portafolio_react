import React from "react";

import './about.scss'

import Perfil from "./components/Perfil";
import Descripcion from "./components/Descripcion";
import ButtonLink from "./../utils/buttonLink";

const About = () => {
  return (
    <>
      <section className="about">
        <Perfil />
        <div className="about-info">
          <Descripcion />
          <ButtonLink text="Download CV" href="#" download="#" />
        </div>
      </section>
    </>
  );
};

export default About;
