import React from "react";
import useRipple from "../hooks/useRipple";

const RippleComponent = ({
  width,
  height,
  size,
  duration,
  backgroundColor,
  text,
  displayNotification,
}) => {
  const [rippleSize] = useRipple(size, duration);

  return (
    <div
      onMouseEnter={displayNotification}
      onClick={displayNotification}
      className="flex justify-center items-center rounded-full relative cursor-pointer"
      style={{ width, height, backgroundColor }}
    >
      <span className="text-white z-20 text-[10px] font-extrabold">{text}</span>
      <div
        className="w-full h-full rounded-full absolute"
        style={{
          width: rippleSize,
          height: rippleSize,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor,
          opacity: 1 - rippleSize / size,
        }}
      />
    </div>
  );
};

export default RippleComponent;
