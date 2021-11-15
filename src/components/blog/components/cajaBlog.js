import React from "react";

import ButtonLink from './../../utils/buttonLink'
import { infoBlog } from "./data";

const CajaBlog = () => {
  return (
    <>
      {infoBlog.map((blog, ind) => (
        <div key={ind} className="blog-container">
          <div className="blog-container_img">
            <img src={blog.img} />
          </div>
          <div className="blog-container_info">
            <div className="blog-container_info-title">
              <p>{blog.title}</p>
            </div>
            <div className="blog-container_info-date">
              <span>icon</span>
              <span>{blog.data}</span>
              <span>|</span>
              <span>{blog.area}</span>
            </div>
            <div className="blog-container_info-description">
              <p>{blog.description}</p>
            </div>
					<div className="blog-container_info-button">
						<ButtonLink text="read more"/>
					</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CajaBlog;
