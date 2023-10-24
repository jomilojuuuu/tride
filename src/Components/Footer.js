import React from "react";
import logo from "../assets/Logo_white.svg";

function Footer() {
  return (
    <div>
      <div className="h-16 bg bg-custom-black" />

      <div className="bg-custom-purple">
        <div className="pt-20">
          <img src={logo} alt="Logo" className=" w-[122px] ml-40" />
          <div className="flex">
            <div>
              <p className="text-white ml-40 py-4">
                Financial management for non-profits
              </p>
              <div className="w-96 grid grid-rows-3 grid-cols-2 ml-40">
                {/*  */}
                <a
                  href="https://www.example.com"
                  className="text-white p-2 font-bold"
                >
                  company
                </a>
                <a
                  href="https://www.example.com"
                  className="text-white p-2 font-bold"
                >
                  Resources
                </a>
                <a href="https://www.example.com" className="text-white p-2">
                  About us
                </a>
                <a href="https://www.example.com" className="text-white p-2">
                  Blog
                </a>
                <a href="https://www.example.com" className="text-white p-2">
                  Privacy policy
                </a>
                <a href="https://www.example.com" className="text-white p-2">
                  FAQ
                </a>
                <a href="https://www.example.com" className="text-white p-2">
                  Terms of use
                </a>
                <a href="https://www.example.com" className="text-white p-2">
                  Contact
                </a>
              </div>
            </div>
            <div className="text-white relative top-24 left-[500px]">
              <h4 className="font-bold font-atyp_display_Medium">Questions?</h4>
              <div className="mt-2">
                <h5 className="font-atyp_display_Medium">Send a mail</h5>
                <p className="font-atyp_display_Regular">hello@tridehq.com</p>
              </div>
            </div>
          </div>
          <div className="rounded-full h-[1px] bg-white mx-40 my-5" />
          <div className="pb-20 text-small">
            <p className="text-white ml-40 py-6">
              ©2023 GoTrideTech Limited. All rights reserved.​
            </p>

            <p className="text-white ml-40 ">
              Tride is a not a bank! All our financial and banking services are
              provided by our partner banks who are duly licensed by the CBN
            </p>

            <p className="text-white ml-40 pt-2">
              Tride is a product of GoTrideTech Nigeria Limited, a company
              registered with the Corporate Affairs Commission with RC Number:
              6948618.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
