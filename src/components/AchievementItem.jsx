import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AchievementItem({ images = [], date = "", title = "", desc = "" }) {
  const [loading, setLoading] = useState(Array(images.length).fill(true));

  const handleImageLoad = (index) => {
    setLoading((prevLoading) => {
      const updatedLoading = [...prevLoading];
      updatedLoading[index] = false;
      return updatedLoading;
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    cssEase: "ease",
    pauseOnHover: false,
  };

  return (
    <li className="blog-post-item">
      <Slider {...settings} style={{ cursor: "grab" }}>
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            {loading[index] && (
              <div class="card is-loading">
                <div class="image"></div>
                <div class="content">
                  <h2></h2>
                  <p></p>
                </div>
              </div>
            )}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              onLoad={() => handleImageLoad(index)}
              style={{
                borderRadius: "1rem",
                maxWidth: "90%",
                maxHeight: "20rem",
                margin: "0 auto",
                marginTop: "1.3rem",
                display: loading[index] ? "none" : "block",
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
