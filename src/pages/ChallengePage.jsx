import React from "react";
import { IMAGES } from "../constants";
import HeroComponent from "../components/HeroComponent";

const ChallengePage = () => {
  return (
    <>
      <HeroComponent
        image={IMAGES.EbahiVocal}
        height="60vh"
        alt="image 1"
        text="Music Minister"
      />
    </>
  );
};

export default ChallengePage;
