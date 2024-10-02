import React from "react";

function AchievementItem({ image = "", date = "", title = "", desc = "" }) {
  return (
    <li className="blog-post-item">
      <a href="#">
        <figure className="blog-banner-box">
          <img src={image} alt="Design conferences in 2022" loading="lazy" />
        </figure>

        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">Date: </p>

            <span className="dot"></span>

            <time dateTime="2022-02-23">{date}</time>
          </div>

          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">{desc}</p>
        </div>
      </a>
    </li>
  );
}

export default AchievementItem;
