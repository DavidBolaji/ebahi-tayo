import { Button, Col, Divider, Row, Tag, Grid, Carousel } from "antd";
import { IMAGES } from "../../../constants";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const { useBreakpoint } = Grid;

export const CarouselTwo = ({ flexDirection }) => {
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
          src={IMAGES.EbahiVocal}
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
          As a Life Coach!
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
              As a Certified Life -coach, I founded the "SMASH YOUR GOALS
              coaching.
            </p>
            <Divider />
            <p className=" text-slate-600 text-[14px] font-semibold">
              It is a Personal- development and mentoring platform helping
              creatives, entrepreneurs and young visionaries become better by
              Setting, Stretching and Smashing SMART goals that lead to elevated
              life experiences with focus on Visioning, Planning, Strategizing,
              Implementing and Execution.
            </p>
          </div>
          <div>
            <p className=" text-slate-600 text-[14px] font-semibold">
              An extension of the coaching platform is "The Upgrade BOULEVARD"
              my Master -Mind Coaching Engagement for *Creative Visionaries*,
              seeking to grow in Self, build Solid Mindsets, and own their
              geniuses while Stepping into Multiple Life Upgrades as they serve
              their unique purposes with a genuine desire to Impact Humanity.
            </p>
            <Divider />
            <p className=" text-slate-600 text-[14px] font-semibold">
              At the Boulevard, I help younger creatives grow a strong
              commitment to a systematic schooling system, and in turn
              forcefully becoming a BETTER VERSION OF THEMSELVES as they deploy
              their life goals.
            </p>
          </div>

          <div>
            <p className=" text-slate-600 text-[14px] font-semibold">
              The UPGRADE BOULEVARD runs as a Cohort based *12 week signature
              coaching and close- watched Mentoring School/System* designed to
              help *25 young creatives and visionaries* experience an Epic-
              shift in their Life within a *90- day period*.
            </p>
            <Divider />
            <p className=" text-slate-600 text-[14px] font-semibold">
              I run 4 Cohort cycles every year.
            </p>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};
