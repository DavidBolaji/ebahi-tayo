import { Button, Col, Divider, Row, Tag, Grid, Carousel } from "antd";
import { IMAGES } from "../../../constants";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

export const CarouselThree = ({ flexDirection }) => {
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
          src={IMAGES.EbahiAbout}
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
          As a Hair Enthusiast and Environmentalist!
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
              As a Hair Enthusiast and Certified Environmentalist, I serve as
              Founder and creative director of EDWOLTZ HAIRLINE, where I
              harnesses her hair- making skills and creative prowess as a medium
              of expression and a tool to drive positive change amongst women in
              my community.
            </p>
            <Divider />
            <p className=" text-slate-600 text-[14px] font-semibold">
              Edwoltz hairline runs as a creative fashion enterprise dedicated
              to providing affordable hair for the Nigerian woman, bearing in
              mind that her QUEST FOR BEAUTY SHOULD ALSO SEEK TO PRESERVE THE
              ENVIRONMENT AT LARGE MAKING IT MORE SUSTAINABLE.
            </p>
          </div>
          <div>
            <p className=" text-slate-600 text-[14px] font-semibold">
              I love the act of trading, buying and selling. It is a strong gene
              passed on to me by my Mum and I utilize it in running EDWOLTZ!. As
              a CO-FOUNDER of ECOVIBBS, a social Innovation START- UP, I
            </p>
            <Divider />
            <p className=" text-slate-600 text-[14px] font-semibold">
              solve environmental problems attached to hair waste and associated
              fashion waste. Well, I studied environmental chemistry in the
              UNIVERSITY OF IBADAN- a MASTER'S DEGREE should not go to
              waste-(lol).
            </p>
          </div>
          <div className="">
            <p className=" text-slate-600 text-[14px] font-semibold">
              I strongly believe that every individual is a potential waste
              generator and as such must adapt simple ways to solve the pending
              waste problem in the Nation. I deploys a 5R waste maximization
              framework in the hair and Eco-business,(REDUCE, REFURBISH, RE-USE,
              REPURPOSE, RECYCLE), allowing me to use my creativity to help
              empower more women and youths while contributing to environmental
              sustainability through awareness, education and developing
              creative ideas that convert waste into eco-friendly products.
            </p>
          </div>

          <div>
            <Divider />
            <p className=" text-slate-600 text-[14px] font-semibold">
              Since 2018, in partnership with SEAL OF HOPE, a not- for- profit
              organization , we have directly impacted over 3000 women in the
              remote areas of the south -west division of Nigeria.
            </p>
            <Divider />
            <p className=" text-slate-600 text-[14px] font-semibold">
              Know more about{" "}
              <Link
                className="text-[#ce33ce]"
                to={
                  "https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fview%2Fecovibbs%2Fhome&sa=D&sntz=1&usg=AOvVaw0vPGHQvQWwl-_uJxWJrFGB"
                }
              >
                ECOVIBBS HERE{" "}
              </Link>
            </p>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};
