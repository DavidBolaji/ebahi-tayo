import { Button, Col, Divider, Row, Tag, Grid, Carousel } from "antd";
import { IMAGES } from "../../../constants";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

export const CarouselFour = ({ flexDirection }) => {
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
          src={IMAGES.EbahiHome}
          alt="ebahi-tayo"
          className="object-cover object-center w-full h-full"
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
          As an Author!
        </Tag>
        <Carousel
          nextArrow={<GrFormNextLink color={"#ce33ce"} />}
          prevArrow={<GrFormPreviousLink color={"#ce33ce"} />}
          dots={false}
          arrows={true}
          autoplay={true}
          autoplaySpeed={12000}
        >
          <p className=" text-slate-600 text-[14px] font-semibold">
            I am an author of books, including my most recent work "PRAYED UP"
            where I desire to trigger a passion that stirs the heart of men and
            women in the direction of compassionate prayers for families,
            institutions and communities. Since October 2020, I have hosted an
            average of 30 Prayed-Up virtual meetings triggering hunger pangs
            amongst creatives, singles, married and mothers.
          </p>
        </Carousel>
      </Col>
    </Row>
  );
};
