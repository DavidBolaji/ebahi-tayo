import React from "react";
import { IMAGES } from "../constants";
import HeroComponent from "../components/HeroComponent";
import AboutFull from "../components/AboutCarousel/AboutFull";
import GalleryComponent from "../components/GalleryComponent";

const AboutPage = () => {
  return (
    <>
      <HeroComponent
        image={IMAGES.EbahiAbout}
        height="60vh"
        alt="image 1"
        text="Music Minister"
      />
      <AboutFull />
      <GalleryComponent />
    </>
  );
};

export default AboutPage;
