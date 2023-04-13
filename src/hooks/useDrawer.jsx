import React, { useState } from "react";

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  return [open, toggleDrawer];
};

export default useDrawer;
