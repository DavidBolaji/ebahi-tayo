import React, { useEffect, useState } from "react";

const useRipple = (duration, size) => {
  const [rippleSize, setRippleSize] = useState(0);

  useEffect(() => {
    let intervalId = null;

    // start the ripple effect animation
    const startRippleAnimation = () => {
      intervalId = setInterval(() => {
        setRippleSize((prevRippleSize) => {
          if (prevRippleSize >= size) {
            clearInterval(intervalId);
            return 0;
          }
          return prevRippleSize + 1;
        });
      }, duration);
    };

    startRippleAnimation();

    // clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [size, duration, rippleSize]);
  return [rippleSize];
};

export default useRipple;
