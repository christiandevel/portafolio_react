import React from "react";

import { listSkills } from "./data";

const ListItem = () => {
  return (
    <div className="services-grid">
      {listSkills.map((item, index) => (
        <div key={index} className="services-grid_box">
          <div className="services-grid_box--img">
            <img src={item.src} />
          </div>
          <div className="services-grid_box--title">
            <p>{item.name}</p>
          </div>
          <div className="services-grid_box--description">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
