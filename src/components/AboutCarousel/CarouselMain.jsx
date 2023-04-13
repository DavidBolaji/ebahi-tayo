import React from "react";
import { Carousel } from "antd";

const dotStyle = {
  backgroundColor: "#ce33de", // change this to the color you want
  borderColor: "#ce33de", // you can also change the border color if you want
};
const CarouselMain = ({ pages }) => (
  <Carousel
    effect="fade"
    // autoplay
    dotStyle={{ dotStyle }}
    dotsClass="custom-dots"
  >
    {pages.map((page) => (
      <div key={page.id}>{page.render()}</div>
    ))}
  </Carousel>
);

export default CarouselMain;
