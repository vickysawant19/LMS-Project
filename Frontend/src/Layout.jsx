import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full ">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`transition-all duration-300 flex-1 ${
          isOpen ? "md:ml-64" : "md:ml-16"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
