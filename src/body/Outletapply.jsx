import React from "react";
import { Outlet } from "react-router";
import NavBar from "../navbar/NavBar";
const Outletapply = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Outletapply;
