import React from "react";
import Logo from "../../svg/Logo";

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-yellow-300 cursor-pointer">Home</li>
              <li className="hover:text-yellow-300 cursor-pointer">Races</li>
              <li className="hover:text-yellow-300 cursor-pointer">Drivers</li>
              <li className="hover:text-yellow-300 cursor-pointer">Teams</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
