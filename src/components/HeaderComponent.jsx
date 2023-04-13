import { Row, Col, Space, Dropdown } from "antd";
import {
  TbBrandTwitter,
  TbBrandFacebook,
  TbBrandInstagram,
  TbSearch,
  TbCaretDown,
} from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import React, { useEffect, useId, useState } from "react";
import { NavLink } from "react-router-dom";
import { IMAGES } from "../constants";
import useDrawer from "../hooks/useDrawer";
import { StyledDrawer } from "./StyledDrawer";
import { StyledMenu } from "./StyledMenu";

const HeaderComponent = () => {
  const items = [
    {
      label: "IDENTITY-DEFINED INTENSIVE",
      key: useId(),
    },
    {
      label: "SMART PHONE EBOOK",
      key: useId(),
    },
  ];

  const items2 = [
    {
      key: useId(),
      label: `Online courses`,
      children: [
        {
          label: "IDENTITY-DEFINED INTENSIVE",
          key: useId(),
        },
        {
          label: "SMART PHONE EBOOK",
          key: useId(),
        },
      ],
    },
  ];

  const [open, toggle] = useDrawer();
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "transparent",
  });

  useEffect(() => {
    function handleScroll() {
      const heroSection = document.getElementById("root");
      const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (heroSection.offsetTop < scrollPosition) {
        setNavbarStyle({ backgroundColor: "black" });
      } else {
        setNavbarStyle({ backgroundColor: "transparent" });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav
      className="shadow md:px-20 px-5 z-20 fixed w-full h-[70px] flex items-center"
      style={navbarStyle}
    >
      <Row className={"w-full"}>
        <Col
          xs={{
            span: 22,
          }}
          lg={{
            span: 4,
          }}
        >
          <div className="flex items-center gap-3">
            <img src={IMAGES.Logo} alt="ebahi logo" className="h-[50px]" />
            <h2 className="text-white font-bold">EBAHI TAYO'O</h2>
          </div>
        </Col>
        <Col span={14} className="hidden md:hidden lg:flex justify-center">
          <ul className="flex items-center">
            <Space size={"large"}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-semibold" : "font-semibold"
                  }
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-semibold" : "font-semibold"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-semibold" : "font-semibold"
                  }
                  to="/blog"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-semibold" : "font-semibold"
                  }
                  to="/book"
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-semibold" : "font-semibold"
                  }
                  to="/challenge"
                >
                  Vocal Challenge Club
                </NavLink>
              </li>
              <li>
                <Dropdown menu={{ items }} s>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active font-semibold" : "font-semibold"
                    }
                    to="/course"
                  >
                    <Space>
                      <span className="font-semibold">Online courses</span>
                      {/* <TbCaretDown /> */}
                    </Space>
                  </NavLink>
                </Dropdown>
              </li>
            </Space>
          </ul>
        </Col>
        <Col
          span={3}
          className="items-center hidden md:hidden lg:flex justify-center"
        >
          <Space size={"large"} className="">
            <TbBrandTwitter className="cursor-pointer" color="#fff" />
            <TbBrandFacebook className="cursor-pointer" color="#fff" />
            <FiYoutube
              onClick={() =>
                handleClick("https://www.youtube.com/@EbahiTayoOfficial")
              }
              className="cursor-pointer"
              color="#fff"
            />
            <TbBrandInstagram
              onClick={() =>
                handleClick(
                  "https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2F&sa=D&sntz=1&usg=AOvVaw3F-eAESa3lp6YakLdsH6cc"
                )
              }
              className="cursor-pointer"
              color="#fff"
            />
          </Space>
        </Col>
        <Col span={2} className="flex justify-end">
          <Space size={"large"} className="">
            <TbSearch color="#fff" className="cursor-pointer" />
            <RiMenu2Line
              color="#fff"
              className="cursor-pointer"
              onMouseEnter={toggle}
              onClick={toggle}
            />

            <StyledDrawer
              open={open}
              onClose={toggle}
              // closeTimeout={500} // for a 0.5s duration
              // closeEasing="ease-in-out"
              footer={[
                <Space size={"large"} className="">
                  <div className="mt-3">
                    <TbBrandTwitter
                      className="cursor-pointer"
                      color="#fff"
                      size={20}
                    />
                  </div>
                  <div className="mt-3">
                    <TbBrandFacebook
                      className="cursor-pointer"
                      color="#fff"
                      size={24}
                    />
                  </div>
                  <div className="mt-3">
                    <FiYoutube
                      className="cursor-pointer"
                      color="#fff"
                      size={24}
                      onClick={() =>
                        handleClick(
                          "https://www.youtube.com/@EbahiTayoOfficial"
                        )
                      }
                    />
                  </div>
                  <div className="mt-3">
                    <TbBrandInstagram
                      className="cursor-pointer"
                      color="#fff"
                      size={24}
                      onClick={() =>
                        handleClick(
                          "https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2F&sa=D&sntz=1&usg=AOvVaw3F-eAESa3lp6YakLdsH6cc"
                        )
                      }
                    />
                  </div>
                </Space>,
              ]}
            >
              <ul className="flex flex-col">
                <Space size={"large"} direction="vertical">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active font-semibold" : "font-semibold"
                      }
                      to="/"
                      onClick={toggle}
                      end
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active font-semibold" : "font-semibold"
                      }
                      to="/about"
                      onClick={toggle}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active font-semibold" : "font-semibold"
                      }
                      to="/blog"
                      onClick={toggle}
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active font-semibold" : "font-semibold"
                      }
                      to="/book"
                      onClick={toggle}
                    >
                      Books
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active font-semibold" : "font-semibold"
                      }
                      to="/challenge"
                      onClick={toggle}
                    >
                      Vocal Challenge Club
                    </NavLink>
                  </li>
                  <li>
                    <StyledMenu items={items2} mode="inline" />
                  </li>
                </Space>
              </ul>
            </StyledDrawer>
          </Space>
        </Col>
      </Row>
    </nav>
  );
};

export default HeaderComponent;
