import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`transition-all duration-300 flex-1 mt-14  min-h-screen ${
          isOpen ? "md:ml-64 " : "md:ml-16"
        }`}
      >
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
