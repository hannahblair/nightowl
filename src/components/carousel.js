import React, { useEffect, useState } from "react";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seal from "../videos/seal.mp4";
import shark from "../videos/shark.mp4";
import wings2 from "../videos/wings2.mp4";
import coral from "../videos/coral.mp4";

export const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  let settings = {
    dots: true,
    className: "sample",
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <Slider {...settings}>
      <div className="video-mask">
        <video muted autoplay="" loop>
          <source src={seal} type="video/mp4" />
        </video>
      </div>
      <div className="video-mask">
        <video autoplay="" muted loop>
          <source src={wings2} type="video/mp4" />
        </video>
      </div>
      <div className="video-mask">
        <video autoplay="" muted loop>
          <source src={shark} type="video/mp4" />
        </video>
      </div>
      <div className="video-mask">
        <video autoplay="" muted loop>
          <source src={coral} type="video/mp4" />
        </video>
      </div>
    </Slider>
  );
};
