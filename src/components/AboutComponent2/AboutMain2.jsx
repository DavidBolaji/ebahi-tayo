import { Button, Col, Divider, Grid, Row, Tag } from "antd";
import React from "react";
import ImageHotspot from "./ImageHotspot2";
import { MdUnfoldMore } from "react-icons/md";
import { useId } from "react";
import RippleComponent from "../RippleComponent";
import { useNavigate } from "react-router-dom";

const { useBreakpoint } = Grid;

const AboutMain2 = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const hotspot = [
    {
      id: useId(),
      element: (
        <RippleComponent
          width="30px"
          backgroundColor="#c33ec3"
          height="30px"
          size={70}
          duration={50}
          text="1"
        />
      ),
      top: "6%",
      left: "6%",
    },
    {
      id: useId(),
      element: (
        <RippleComponent
          width="30px"
          backgroundColor="#c33ec3"
          height="30px"
          size={70}
          duration={70}
          text="2"
        />
      ),
      top: "20%",
      left: "70%",
    },
    {
      id: useId(),
      element: (
        <RippleComponent
          width="30px"
          backgroundColor="#c33ec3"
          height="30px"
          size={70}
          duration={70}
          text="3"
        />
      ),
      top: "55%",
      left: "80%",
    },
  ];

  return (
    <Row className="flex-row-reverse bg-[#fff] mt-20 pb-20">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className="pt-20 p-5 md:p-20 flex justify-center"
      >
        <ImageHotspot hotspot={hotspot} />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className={`${screens.lg ? "pl-20 pt-20" : "md:px-20 px-5"} "`}
      >
        <p className="text-[#c33ec3]  md:text-[17px] font-semibold">
          Do you flow out as a worship leader! Gospel artiste, Chorister,
          Vocalist... ?
        </p>

        <p className="text-[#c33ec3] md:text-[17px] font-semibold capitalize">
          DO you have multi - expressions and wish you could fully establish all
          your expressions without apologies ?
        </p>
        <div className="flex justify-end">
          <Tag color="magenta" className="mt-2 mb-3">
            I am here to help you
          </Tag>
        </div>

        <p className="text-[#c33ec3] md:text-[17px] font-semibold">
          I HELP MULTI-POTENTIAL CREATIVES GROW IN SPIRIT, BUILD SOLID MINDSETS,
          STEP INTO LIFE UPGRADES WHILE EMBRACING PURPOSE ACTIVELY & FORCEFULLY!
        </p>
        <Divider />
        <div className="flex justify-start">
          <Button
            onClick={() => navigate("/about")}
            icon={<MdUnfoldMore className="-ml-2 mr-1" />}
            className="flex items-center bg-[#c33ec3] text-white border-none mt-8 hover:bg-white hover:text-[#c33ec3] hover:border border-1-[#c33ec3]"
          >
            Learn More
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default AboutMain2;
