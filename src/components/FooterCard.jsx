import { Badge, Col, Row, Space } from "antd";
import React from "react";

const FooterCard = ({ title, badge, image, link }) => {
  const handleClick = (link) => {
    window.open(link, "_target");
  };
  return (
    <Row
      onClick={() => handleClick(link)}
      className="w-full flex justify-between  my-2 cursor-pointer shadow"
    >
      <Col xs={18} sm={18} md={18} lg={18} className="">
        {/* <Space direction="vertical" size="small"> */}
        <h3 className="text-[#777] md:text-[13px] font-semibold text-[12px] mb-3 uppercase">
          {title}
        </h3>
        <span className="text-[#777] uppercase inline-block -translate-y-3/4 md:text-[12px] font-semibold text-md ">
          {badge}
        </span>
        {/* </Space> */}
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
        <div className="w-14 h-14">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      </Col>
    </Row>
  );
};

export default FooterCard;
