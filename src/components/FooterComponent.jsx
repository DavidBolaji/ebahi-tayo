import React from "react";
import { IMAGES } from "../constants";
import { Col, Row, Space } from "antd";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";
import { cards } from "./Resources/ResourceMain";
import FooterCard from "./FooterCard";

const FooterComponent = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Row className="bg-[#000000] flex">
        <Col xs={24} sm={24} md={7} lg={7} className="">
          <Space direction="vertical md:p-20 md:pr-5 p-5">
            <img
              src={IMAGES.EbahiAbout}
              className="object-center object-cover"
            />
            <p className="text-[#777] md:text-[17px] font-bold text-md mt-3">
              ETO – A Dimpled Smile On The Face Of The World!
            </p>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10}>
          <Space direction="vertical md:p-20 md:px-10 p-5">
            <div>
              <h2 className="text-[#777] md:text-[13px] font-semibold text-[12px] mb-5">
                Nudgets
              </h2>
              <p className="text-[#777] md:text-[17px] font-semibold text-md">
                “The tough things you have been through are not secrets to be
                kept, but must be used as part of the curriculum with which you
                strengthen and straighten others for destiny and life!"
              </p>
            </div>
            <div>
              <h2 className="text-[#777] md:text-[13px] font-semibold text-[12px] mb-2 mt-10">
                Contact information
              </h2>
              <Space size={"large"} direction="vertical">
                <div>
                  <Space direction="horizontal">
                    <span className="text-[#777] md:text-[17px] font-semibold text-md">
                      E-mail:
                    </span>
                    <span className="text-[#777] md:text-[17px] font-semibold text-md">
                      ebahi2001@gmail.com
                    </span>
                  </Space>
                </div>
                <Space size={"large"} className="">
                  <TbBrandTwitter
                    className="cursor-pointer"
                    color="#fff"
                    size={30}
                  />
                  <TbBrandFacebook
                    className="cursor-pointer"
                    color="#fff"
                    size={30}
                  />
                  <FiYoutube
                    className="cursor-pointer"
                    color="#fff"
                    size={30}
                    onClick={() =>
                      handleClick("https://www.youtube.com/@EbahiTayoOfficial")
                    }
                  />
                  <TbBrandInstagram
                    onClick={() =>
                      handleClick(
                        "https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2F&sa=D&sntz=1&usg=AOvVaw3F-eAESa3lp6YakLdsH6cc"
                      )
                    }
                    className="cursor-pointer"
                    color="#fff"
                    size={30}
                  />
                </Space>
              </Space>
            </div>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={7} lg={7}>
          <Space direction="vertical pt-20 pb-20 md:pr-20 p-5">
            <h2 className="text-[#777] md:text-[13px] font-semibold text-[12px] mb-3">
              Books by ETO
            </h2>
            <p className="text-[#777] md:text-[17px] font-semibold text-md">
              ETO – A Dimpled Smile On The Face Of The World!
            </p>
            {cards.map((card) => {
              return (
                <FooterCard
                  title={card.title}
                  image={card.image}
                  link={card.link}
                  badge={card.badge}
                />
              );
            })}
          </Space>
        </Col>
      </Row>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          className="text-center  p-5 bg-[#777] text-white flex justify-center items-center"
        >
          © 2023 Ebahi Tayo-Ogunleye
        </Col>
      </Row>
    </>
  );
};

export default FooterComponent;
