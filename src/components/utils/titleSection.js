import React from "react";

import './styles/titleSection.scss'

const TitleSection = (props) => {
  return (
    <div className="title">
      <p>
        My 
        <span> {props.title} </span>
      </p>
    </div>
  );
};

export default TitleSection;
