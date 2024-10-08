import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AchievementItem({ images = [], date = "", title = "", desc = "" }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    cssEase: "ease",
    pauseOnHover: false,
  };

  return (
    <li className="blog-post-item">
      <Slider {...settings} style={{ cursor: "grab" }}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt="image1"
              lazyLoad="true"
              style={{
                borderRadius: "1rem",
                maxWidth: "90%",
                maxHeight: "20rem",
                margin: "0 auto",
                marginTop: "1.3rem",
              }}
            />
          </div>
        ))}
      </Slider>

      <div className="blog-content" style={{ marginTop: "1rem" }}>
        <div className="blog-meta">
          <p className="blog-category">Date </p>

          <span className="dot"></span>

          <time dateTime="2022-02-23">{date}</time>
        </div>

        <h3 className="h3 blog-item-title">{title}</h3>
        <p className="blog-text">{desc}</p>
      </div>
    </li>
  );
}

export default AchievementItem;
