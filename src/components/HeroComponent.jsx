import React from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HeroComponent = (props) => {
  const { image, alt, text, height = "60vh", render } = props;
  const { pathname } = useLocation();
  return (
    <section className={`relative w-full overflow-hidden`} style={{ height }}>
      <div className="w-full h-full">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute top-[200px] z-10">
        <div className="bg-[#c33ec3] text-white w-[160px] mx-5 md:mx-20 text-center px-3 font-bold py-[5px] rounded-md">
          {typeof render !== "undefined" ? (
            <Typewriter
              options={{
                strings: [`${text}`],
                autoStart: true,
                loop: true,
              }}
            />
          ) : null}
        </div>
        {typeof render !== "undefined" ? (
          render.map((el) => (
            <div className="md:px-20 px-[5px]" key={el.id}>
              {el.writeUp}
            </div>
          ))
        ) : (
          <div className="md:px-20 px-[15px] uppercase text-3xl mt-5 text-[#c33ec3] font-bold">
            {pathname.replace("/", "")} Page
          </div>
        )}
      </div>
      <div
        className={`w-full h-screen h-[${height}] overflow-hidden bg-gradient-to-r from-[rgba(0,0,0,0.8)] from-50% to-[rgba(0,0,0,0.1)] absolute top-0 bottom-0 left-0 right-0`}
      ></div>
    </section>
  );
};

export default HeroComponent;
