import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ScrollToTop from "../components/ScrollToTop";

const RootPage = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default RootPage;
