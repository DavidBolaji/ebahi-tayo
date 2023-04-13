import React from "react";
import HeroComponent from "../components/HeroComponent";
import { IMAGES } from "../constants";

const BlogPage = () => {
  return (
    <>
      <HeroComponent
        image={IMAGES.EbahiCourse}
        height="60vh"
        alt="image 1"
        text="Music Minister"
      />
    </>
  );
};

export default BlogPage;
