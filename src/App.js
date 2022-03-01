import React, { useContext } from "react";
import NavBar from "./component/navBar";
import Banner from "./component/banner";
import Services from "./component/services";
import AboutUs from "./component/aboutUs";
import NewsLetter from "./component/newsLetter";
import Experience from "./component/experience";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { OtechContext } from "./otechContext";

function App() {
  const { setIsSubmenuOpen } = useContext(OtechContext);
  return (
    <>
      <NavBar />
      <section onMouseOver={() => setIsSubmenuOpen("")}>
        <Banner />
        <Services />
        <AboutUs />
        <NewsLetter />
        {/* <Experience /> */}
        <Footer />
      </section>
    </>
  );
}

export default App;
