import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Region from "./Components/Region";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className=" bg-custom-black font-atyp_display_Regular">
        <Header />
        <Body />
        <Region />
        <Footer />
      </div>
    </div>
  );
}

export default App;
