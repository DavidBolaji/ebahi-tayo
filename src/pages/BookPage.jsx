import React from "react";
import HeroComponent from "../components/HeroComponent";
import { IMAGES } from "../constants";
import ResourceMain from "../components/Resources/ResourceMain";

const BookPage = () => {
  return (
    <>
      <HeroComponent
        image={IMAGES.EbahiBook}
        height="60vh"
        alt="image 1"
        text="Music Minister"
      />
      <ResourceMain />
    </>
  );
};

export default BookPage;
