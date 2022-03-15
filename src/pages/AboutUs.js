import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/navBar";
import AboutUsC from "../component/aboutUsC";
import Experience from "../component/experience";
import NewsLetter from "../component/newsLetter";
import Expertise from "../component/expertise";
import Testimonials from "../component/testimonials";
import ContactUsMain from "../component/contactUsMain";
import Footer from "../component/footer";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="main">
      <NavBar />

      <section
        className="main-banner inner-banner about-banner"
        style={{
          backgroundImage:
            "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/inner-banner-bg.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col>
              <div className="banner-content">
                <h1 className="h1-title">About Company</h1>
                <div className="breadcrumb-box">
                  <ul>
                    <li>
                      <a href="#" title="home">
                        Home
                      </a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <AboutUsC />

      <Experience />

      <NewsLetter />

      <Expertise />

      <Testimonials />

      <ContactUsMain />

      <Footer />
    </div>
  );
}

export default AboutUs;
