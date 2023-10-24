import React from "react";
import church from "../assets/church-details.png";
import transaction from "../assets/transaction pic.png";

function Info() {
  return (
    <div className="flex mt-16">
      <div className="ml-[118px] bg-custom-gray px-14 py-10 rounded-xl w-[40rem]">
        <div>
          <img src={church} alt="img" className=" transform scale-95" />
        </div>

        <div>
          <h2 className="text-white py-5 text-2xl font-semibold font-atyp_display_Regular  ">
            Get separate account numbers for offerings, donations, and projects.
          </h2>

          <h3 className="text-gray-300  mb-5">
            Avoid the hassle of visiting the bank solely for setting up a single
            program or project account. Our platform allows you to efficiently
            create multiple bank accounts with just one click, providing you
            with the flexibility you need.
          </h3>

          <a
            href="https://www.example.com"
            className="text-[#7C56F6] font-bold hover:text-white mt-20"
          >
            Get started
          </a>
        </div>
      </div>

      <div className="mr-[118px] ml-6 bg-custom-gray px-14 py-10 rounded-xl w-[40rem] ">
        <div>
          <img src={transaction} alt="img" className=" transform scale-95" />
        </div>

        <div className="mt-10">
          <h2 className="text-white py-5 text-2xl font-semibold font-atyp_display_Regular  ">
            Keep accurate record of money spent
          </h2>

          <h3 className="text-gray-300 mb-5">
            Transparency and accountability are vital for non-profits. With
            Tride, you can effortlessly maintain precise financial records,
            ensuring complete transparency in your operations. Elevate your
            non-profit's financial integrity with our record-keeping feature.
          </h3>

          <a
            href="https://www.example.com"
            className="text-[#7C56F6] font-bold hover:text-white mt-20"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
