import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../assets/images/Slide.png";

import Slide2 from "../assets/images/Slide2.png";
import Slide1 from "../assets/images/Slide1.png";

const ImageSwiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: Slide,
      title: "Latest News & Updates",
      description:
        "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
      image: Slide1,
      title: "Featured Story",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: Slide2,
      title: "Upcoming Events",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[320px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0  text-white p-4 rounded-b-lg">
              <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSwiper;
