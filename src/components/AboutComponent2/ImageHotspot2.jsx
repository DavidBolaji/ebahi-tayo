import React from "react";
import { IMAGES } from "../../constants";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const ImageHotspot2 = ({ hotspot }) => {
  const screens = useBreakpoint();

  return (
    <div className="relative bg-red-600 w-full h-full ">
      <div className="w-full h-full">
        <img
          src={IMAGES.EbahiCourse}
          className="object-cover object-center w-full h-full"
        />
      </div>
      {/* <div className="">
        {hotspot.map((h) => {
          return (
            <div
              key={h.id}
              className="absolute"
              style={{ top: h.top, left: h.left }}
            >
              {h.element}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ImageHotspot2;
