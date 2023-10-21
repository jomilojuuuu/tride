import React from "react";
import ss from "../assets/screen-shot.png";
import gtb from "../assets/gtb.png";
import ndic from "../assets/ndic.png";
import Info from "./Info";

function Body() {
  return (
    <div>
      <div className="flex">
        <div className="ml-32 mt-32">
          <h2 className="text-white text-4xl font-atyp_display">
            Banking made easy for non-profit organizations.
          </h2>
          <p className="text-white my-8 text-lg">
            Tride helps you receive funds faster from your members and donors
            with dedicated bank accounts and online payment options.
          </p>

          <div>
            <button className="px-4 py-3 bg-white rounded-[4px] text-black">
              Open an account
            </button>

            <button className="ml-5 px-4 py-3 bg-custom-purple rounded-[4px] text-white">
              Book a meeting with the team
            </button>
          </div>

          <div className="flex text-white text-lg my-8">
            <h2 className="flex justify-center">
              Partner Bank:
              <img className="ml-2" src={gtb} alt="gtb" />
            </h2>
            <h2 className="flex ml-6 justify-center">
              All deposits insured by:
              <img className="ml-2" src={ndic} alt="ndic" />
            </h2>
          </div>
        </div>

        <div className="overflow">
          <img src={ss} alt="ss" className="" />
        </div>
      </div>

      <Info />
    </div>
  );
}

export default Body;
