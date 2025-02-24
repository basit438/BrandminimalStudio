import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0d0d0d] text-white fixed w-full z-50 shadow-lg border-b-4 border-[#f5e3c9]">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-black tracking-wide text-[#f5e3c9]">
          BRANDMINIMAL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold text-lg text-gray-300">
          {[
           
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "About", path: "/about" },
            { name: "Testimonials", path: "/testimonials" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative after:block after:h-[2px] after:w-0 after:bg-[#f5e3c9] after:transition-all after:duration-300 hover:after:w-full hover:text-[#f5e3c9]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d0d] text-white py-4 absolute top-16 left-0 w-full shadow-md border-t-2 border-[#f5e3c9]">
          <div className="flex flex-col items-center space-y-4">
            {[
              
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "About", path: "/about" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-lg font-medium hover:text-[#f5e3c9] transition"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
