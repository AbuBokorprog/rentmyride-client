import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/header-footer/Navbar";
import Footer from "../../component/header-footer/Footer";

const Main: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-2 lg:px-10 pt-20 pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
