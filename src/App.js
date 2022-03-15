import React, { useContext } from "react";
import NavBar from "./component/navBar";
import Banner from "./component/banner";
import ServicesC from "./component/servicesC";
import AboutUsC from "./component/aboutUsC";
import NewsLetter from "./component/newsLetter";
import Experience from "./component/experience";
import Footer from "./component/footer";
import Pricing from "./component/pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import { OtechContext } from "./otechContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { setIsSubmenuOpen } = useContext(OtechContext);
  return (
    <>
      <NavBar />
      <section onMouseOver={() => setIsSubmenuOpen("")}>
        <Banner />
        <ServicesC />
        <AboutUsC />
        <NewsLetter />
        <Experience />
        <Pricing />
        <Footer />
      </section>
    </>
  );
}

export default App;
