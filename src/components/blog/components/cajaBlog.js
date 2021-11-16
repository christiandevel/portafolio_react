import React from "react";

import ButtonLink from "./../../utils/buttonLink";
import { infoBlog } from "./data";

const CajaBlog = () => {
  return (
    <>
      <div className="notes">
        {infoBlog.map((blog, ind) => (
          <div key={ind} className="card">
            <div className="card-header">
              <img
                src={blog.img}
                alt={`Notes sobre ${blog.alt}`}
                className="card__image"
              />
            </div>
            <div className="card_body">
              <span className="card_body-title"> {blog.title} </span>
              <div className="card_body-info">
                <span>{blog.data}</span>
                <span>|</span>
                <span>{blog.area}</span>
              </div>
              <div className="card_body-descripcion">
                <span>{blog.description}</span>
              </div>
            </div>
            <div className="card_footer">
              <ButtonLink text="blog-read" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CajaBlog;
