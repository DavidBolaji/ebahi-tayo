import {
  Avatar,
  Button,
  Col,
  Divider,
  Grid,
  Row,
  Tag,
  notification,
} from "antd";
import React from "react";
import ImageHotspot from "./ImageHotspot";
import { MdUnfoldMore } from "react-icons/md";
import { useId } from "react";
import RippleComponent from "../RippleComponent";
import { IMAGES } from "../../constants";
import { useNavigate } from "react-router-dom";

const { useBreakpoint } = Grid;

const AboutMain = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const d = () => {
    api.open({
      key: "d1",
      message: "Personal Transformation",
      placement: "topLeft",
      description:
        " – My Breakthrough Coaching activates everyday people into extraordinary leaders through the power of Identity Awakening, Purpose Discovery, Personal Mastery and Significant Living.",
      icon: <Avatar src={IMAGES.EbahiAbout} />,
    });
  };

  const d2 = () => {
    api.open({
      key: "d2",
      message: "Social Transformation",
      placement: "top",
      description:
        " – My Public Policy and Impact Advisory empowers African citizens, nonprofit leaders and governments into Community Development, Nation Building and Social Innovation!",

      icon: <Avatar src={IMAGES.EbahiAbout} />,
    });
  };

  const d3 = () => {
    api.open({
      key: "d3",
      message: "Spiritual Transformation",
      placement: "bottom",
      description:
        " – My lifelong calling as a Minister of Christ Jesus is to build the Church through Scriptural Discipleship, Spiritual Mentorship, Supernatural Ministry and Missionary Outreach.",
      icon: <Avatar src={IMAGES.EbahiAbout} />,
    });
  };

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
          displayNotification={d}
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
          displayNotification={d2}
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
          displayNotification={d3}
        />
      ),
      top: "55%",
      left: "80%",
    },
  ];

  return (
    <Row className="bg-[#fafafa] pb-20" id="ab1">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className="pt-20 p-5 md:p-20 flex justify-center"
      >
        {contextHolder}
        <ImageHotspot hotspot={hotspot} />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        className={`${screens.lg ? "pr-20 pt-20" : "md:px-20 px-5"} "`}
      >
        <Tag color="magenta" className="mb-5">
          A tip of the iceberg
        </Tag>
        <p className="text-slate-600 text-md  md:text-[17px] font-semibold">
          My name is Ebahi Tayo- O' and at my very Core, I am Creative Equipper
          and Visionary. I am a Multi- potentialite that flows out as a Worship
          leader & Music Artiste, a Life- coach, Hair enthusiast and
          Environmentalist, Business woman, and Author.
        </p>
        <Divider />
        <p className="text-slate-600 text-md md:text-[17px] font-semibold">
          I am consumed by a desire to see a generation of young and younger
          adults who not only know their True potential but are totally
          unashamed and unapologetic of expressing deep values that can mold and
          shape the culture and systems in their immediate circle of influence,
          communities and the world at large. This desire forms the Crux of
          everything that I do.
        </p>
        <div className="flex justify-end mt-20">
          <Button
            icon={<MdUnfoldMore className="-ml-2 mr-1 " />}
            onClick={() => navigate("/about")}
            className="flex text-center justify-center items-center bg-[#c33ec3] text-white border-none  hover:bg-white hover:text-[#c33ec3] hover:border border-1-[#c33ec3]"
          >
            Read More
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default AboutMain;
