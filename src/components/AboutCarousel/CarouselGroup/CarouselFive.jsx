import { Button, Col, Divider, Row, Tag, Grid, Carousel } from "antd";
import { IMAGES } from "../../../constants";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

export const CarouselFive = ({ flexDirection }) => {
  const screens = useBreakpoint();
  console.log(flexDirection);
  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className="pt-20 p-5 md:p-20 flex justify-center"
        // style={flexDirection}
      >
        <img
          src={IMAGES.EbahiBlog}
          alt="ebahi-tayo"
          className="object-cover object-center w-80 h-80"
        />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className={`${screens.lg ? "pr-20 pt-20" : "md:px-20 px-5"} "`}
      >
        <Tag color="magenta" className="mb-5">
          HMMM! Is that alllll! (LOLL!)
        </Tag>
        <Carousel
          nextArrow={<GrFormNextLink color={"#ce33ce"} />}
          prevArrow={<GrFormPreviousLink color={"#ce33ce"} />}
          dots={false}
          arrows={true}
          autoplay={true}
          autoplaySpeed={12000}
        >
          <div>
            <p className=" text-slate-600 text-[14px] font-semibold">
              LET ME CONCLUDE BY SAYING THAT I AM A FAMILY- WOMAN!
            </p>
            <Divider />
            <p>I love the smell of my home!</p>
            <Divider />
            <p>I love to be around family and people that I LOVE!</p>
            <Divider />

            <p>I am a WIFE and a MUM too!</p>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};
