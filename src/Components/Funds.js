import React from "react";
import fund from "../assets/status.png";

function Funds() {
  return (
    <div className="bg-neutral-700">
      <div className="">
        <h3 className="text-white py-5 text-2xl">
          Get funds for your projects approved faster with digital signatures on
          your accounts.
        </h3>

        <h5 className="text-gray-300 mb-11 text-lg">
          With our digital signatory feature, you can add authorized users to
          your accounts via email, and watch as approvals go from days to mere
          minutes. No more paperwork, no more delays.
        </h5>

        <a
          href="https://www.example.com"
          className="text-purple-500 font-semibold "
        >
          Get started
        </a>
      </div>

      <div>
        <img src={fund} alt="Logo" className="" />
      </div>
    </div>
  );
}

export default Funds;
