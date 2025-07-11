import React from "react";
import Logo from "../../svg/Logo";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenueOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenueOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Header */}
      <header className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav>
            <ul className="md:flex space-x-6 hidden">
              <li className="hover:text-yellow-300 cursor-pointer">Home</li>
              <li className="hover:text-yellow-300 cursor-pointer">Races</li>
              <li className="hover:text-yellow-300 cursor-pointer">Drivers</li>
              <li className="hover:text-yellow-300 cursor-pointer">Teams</li>
            </ul>
            <button
              className="md:hidden text-xl focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : "☰"}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`
        fixed inset-0 bg-black z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
          >
            <div className="flex flex-col items-center space-y-8 text-white text-2xl">
              <a
                href="#home"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#races"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Races
              </a>
              <a
                href="#drivers"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Drivers
              </a>
              <a
                href="#teams"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
