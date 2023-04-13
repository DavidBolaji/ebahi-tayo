import React from "react";
import HeroComponent from "../components/HeroComponent";
import { IMAGES } from "../constants";
import { Button, Space } from "antd";
import AboutMain from "../components/AboutComponent/AboutMain";
import AboutMain2 from "../components/AboutComponent2/AboutMain2";
import ResourceMain from "../components/Resources/ResourceMain";

const pageWriteup = [
  {
    id: 1,
    writeUp: (
      <p className="text-white mt-5 text-3xl font-semibold uppercase max-w-[700px] md:px-0 px-4 leading-normal">
        Transformational <br />
        Catalyst for Africa’s Emergence
      </p>
    ),
  },
  {
    id: 3,
    writeUp: (
      <Space size={"large"} className="md:px-0 px-4">
        <a
          href="#ab1"
          className="mt-10 bg-[#c33ec3] px-5 py-2 rounded-md text-white border-none font-semibold"
        >
          About Me
        </a>
        <button className="mt-10 px-5 py-2 rounded-md text-white border border-[#c33ec3] font-semibold">
          chat me
        </button>
      </Space>
    ),
  },
];

const HomePage = () => {
  return (
    <>
      <HeroComponent
        image={IMAGES.EbahiHome}
        height="80vh"
        alt="image 1"
        text="Music Minister"
        render={pageWriteup}
      />
      <AboutMain />
      <AboutMain2 />
      <ResourceMain />
    </>
  );
};

export default HomePage;
