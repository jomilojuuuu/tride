import React from "react";
import logo from "../assets/Logo_white.svg";

function Header() {
  return (
    <div className="py-6 flex bg-custom-black h-24 justify-between  max-w-7xl mx-auto xl:items-center">
      <img src={logo} alt="Logo" className="w-[122px] ml-24" />

      <div className="flex mr-[97px]">
        <div>
          <button className="px-6 py-3 text-white ">Login</button>
        </div>

        <div>
          <button className="px-4 py-3 bg-white rounded-[4px] text-black">
            Open an account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
