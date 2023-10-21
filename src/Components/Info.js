import React from "react";
import church from "../assets/church-details.png";
import transaction from "../assets/transaction pic.png";

function Info() {
  return (
    <div className="flex">
      <div className="ml-20  bg-neutral-700 px-14 py-10 rounded-xl w-[40rem]">
        <div>
          <img src={church} alt="img" className="pb-10" />
        </div>

        <div>
          <h2 className="text-white py-5 text-2xl  ">
            Get separate account numbers for offerings, donations, and projects.
          </h2>

          <h3 className="text-gray-300 mb-11 text-lg">
            Avoid the hassle of visiting the bank solely for setting up a single
            program or project account. Our platform allows you to efficiently
            create multiple bank accounts with just one click, providing you
            with the flexibility you need.
          </h3>

          <a
            href="https://www.example.com"
            className="text-purple-500 font-semibold "
          >
            Get started
          </a>
        </div>
      </div>

      <div className="mr-20 ml-6 bg-neutral-700 px-14 py-10 rounded-xl w-[40rem] ">
        <div>
          <img src={transaction} alt="img" className="pb-10" />
        </div>

        <div>
          <h2 className="text-white py-5 text-3xl  ">
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
            className="text-purple-500 font-semibold "
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
