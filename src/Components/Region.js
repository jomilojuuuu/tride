import React, { useState } from "react";
import Booking from "./Booking";

function Region() {
  const [displayText, setDisplayText] = useState("");
  const changeText = (newText) => {
    setDisplayText(newText);
  };
  return (
    <div className="bg-white  pt-14">
      <div className="flex flex-col items-center justify-center ">
        <div className="">
          <h1 className="text-black font-atyp_display_Medium font-bold text-[28px]">
            Non Profit Organizations that need Tride
          </h1>
          <p className="text-center font-atyp_display_Regular">
            Tride is a perfect fit for non-profit organizations of every kind
          </p>
        </div>
        <div className="bg-gray-100 font-atyp_display_Medium flex justify-between p-2 rounded-full w-[32%] items-center mt-10">
          <button
            className="rounded-full bg-custom-purple text-white py-1 px-2"
            onClick={() =>
              changeText(
                "Tride empowers churches by providing distinct accounts for Tithes, Offerings, and special projects or programs. No more juggling donations for various projects within a single account – with Tride, managing church finances is a breeze."
              )
            }
          >
            Churches
          </button>
          <button
            className="rounded-full hover:bg-custom-purple py-1 px-2 hover:text-white"
            onClick={() =>
              changeText(
                "Other religious organizations can create separate accounts for Offerings and special project or special programmes.Religious organizations, have the option to establish dedicated bank accounts for Offerings and special projects or programs and the flexibility to offer multiple payment options to their members, including direct bank transfers and online payment mode."
              )
            }
          >
            Religious Orgs
          </button>
          <button
            className="rounded-full hover:bg-custom-purple py-1 px-2 hover:text-white"
            onClick={() =>
              changeText(
                "NGOs have the flexibility to open distinct bank accounts for various purposes, including outreach initiatives, fundraising for specific social causes, and recurring events or programs. Additionally, they can provide multiple payment options to their members for added convenience and managEffortlessly, NGOs can maintain precise financial records, ensuring complete transparency in your operations."
              )
            }
          >
            NGOs
          </button>
          <button
            className="rounded-full hover:bg-custom-purple py-1 px-2 hover:text-white"
            onClick={() =>
              changeText(
                "Charity Organizations can get separate accounts for outreaches, fundraising for a particular person or orphanage, they can also give donors multiple payment options to donate."
              )
            }
          >
            Charity Orgs
          </button>
        </div>

        <div className="w-[30%] h-auto bg-gray-100 rounded-xl mt-8 mb-16">
          <p className="text-base text-center p-4">
            {displayText}
            {/* Other religious organizations can create separate accounts for
            Offerings and special project or special programmes.Religious
            organizations, have the option to establish dedicated bank accounts
            for Offerings and special projects or programs and the flexibility
            to offer multiple payment options to their members, including direct
            bank transfers and online payment mode. */}
          </p>
        </div>
      </div>
      <div className="ml-[100px] mr-[100px]">
        <Booking />
      </div>
    </div>
  );
}

export default Region;
