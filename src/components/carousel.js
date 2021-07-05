import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seal from "../videos/seal.mp4";
import shark from "../videos/shark.mp4";
import wings2 from "../videos/wings2.mp4";

export const Carousel = () => {
  let settings = {
    dots: true,
    className: "sample",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <Slider {...settings}>
      <div className="videos">
        <video muted autoplay="" loop width="300" height="600">
          <source src={seal} type="video/mp4" />
        </video>
      </div>
      <div>
        <video autoplay="" muted loop width="300" height="600">
          <source src={wings2} type="video/mp4" />
        </video>
      </div>
      <div>
        <video autoplay="" muted loop width="300" height="600">
          <source src={shark} type="video/mp4" />
        </video>
      </div>
    </Slider>
  );
};
