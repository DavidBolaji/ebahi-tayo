import React, { useId } from "react";
import CarouselMain from "./CarouselMain";

import { CarouselOne } from "./CarouselGroup/CarouselOne";
import { CarouselTwo } from "./CarouselGroup/CarouselTwo";
import { CarouselThree } from "./CarouselGroup/CarouselThree";
import { CarouselFour } from "./CarouselGroup/CarouselFour";
import { CarouselFive } from "./CarouselGroup/CarouselFive";

const AboutFull = () => {
  const pages = [
    {
      id: useId(),
      render: () => {
        return <CarouselOne />;
      },
    },
    {
      id: useId(),
      render: () => {
        return <CarouselTwo />;
      },
    },
    {
      id: useId(),
      render: () => {
        return <CarouselThree />;
      },
    },
    {
      id: useId(),
      render: () => {
        return <CarouselFour />;
      },
    },
    {
      id: useId(),
      render: () => {
        return <CarouselFive />;
      },
    },
  ];
  return (
    <div className="md:p-20 p-5 bg-[#e4e4e4]">
      <CarouselMain pages={pages} />
    </div>
  );
};

export default AboutFull;
