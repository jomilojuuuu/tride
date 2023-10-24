import React from "react";
import tride from "../assets/image.png";

function Booking() {
  return (
    <div className="pb-14">
      <div className="flex bg-custom-black h-[270px] rounded-2xl font-atyp_display_Medium">
        <div className=" p-16 ">
          <h2 className="text-white text-2xl">
            Start collecting seeds and donations better,
            <br /> and keep accurate record of your organization
            <br /> finances.
          </h2>

          <div className="flex mt-7">
            <button className="px-4 py-3 bg-white rounded-[4px] text-black">
              Create an account today
            </button>

            <button className="ml-5 px-4 py-3 bg-custom-purple rounded-[4px] text-white">
              Book a meeting with the team
            </button>
          </div>
        </div>

        <div className="overflow">
          <img
            src={tride}
            alt="Logo"
            className="w-[130px] ml-24 relative top-[160px] left-[290px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;
