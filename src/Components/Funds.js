import React from "react";
import fund from "../assets/status.png";

function Funds() {
  return (
    <div className="bg-custom-gray flex ml-[118px] mr-[118px] mt-6 rounded-xl px-14 py-20 ">
      <div className="w-[700px]">
        <h3 className="text-white py-5 text-2xl font-semibold font-atyp_display_Regular">
          Get funds for your projects approved faster with digital signatures on
          your accounts.
        </h3>

        <h5 className="text-gray-300 mb-11 text-lg">
          With our digital signatory feature, you can add authorized users to
          your accounts via email, and watch as approvals go from days to mere
          minutes.
          <br /> No more paperwork, no more delays.
        </h5>

        <a
          href="https://www.example.com"
          className="text-[#7C56F6] font-bold hover:text-white"
        >
          Get started
        </a>
      </div>

      <div className="">
        <img src={fund} alt="Logo" className="w-[700px] relative left-10" />
      </div>
    </div>
  );
}

export default Funds;
