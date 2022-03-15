import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/navBar";
import NewsLetters from "../component/newsLetter";
import Pricing from "../component/pricing";
import Footer from "../component/footer";
import "../component/servicesC.css";
import "./Services.css";
import Portfolio from "../component/portfolio";

function Services() {
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
                <h1 className="h1-title">Our Services</h1>
                <div className="breadcrumb-box">
                  <ul>
                    <li>
                      <a href="#" title="home">
                        Home
                      </a>
                    </li>
                    <li>OUR SERVICES</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* services */}
      <section className="main-our-services">
        <Container>
          <div className="our-services-list">
            <Row>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img
                        src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/web-design-icon.png"
                        alt="web-design"
                      />
                    </div>
                    <h3 className="our-serv-icon-h3">Web Design</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/idea-research-icon.png" />
                    </div>
                    <h3 className="our-serv-icon-h3">Idea & Research</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/web-development-icon.png" />
                    </div>
                    <h3 className="our-serv-icon-h3">Web Development</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/seo-marketing-icon.png" />
                    </div>
                    <h3 className="our-serv-icon-h3">SEO & Marketing</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/seo-marketing-icon.png" />
                    </div>
                    <h3 className="our-serv-icon-h3">Real Time & Data</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/seo-marketing-icon.png" />
                    </div>
                    <h3 className="our-serv-icon-h3">Analysis</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/seo-marketing-icon.png" />
                    </div>
                    <h3 className="our-serv-icon-h3">Penalty Recovery</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="our-service-box">
                  <div className="our-service-text">
                    <div className="our-service-text-icon">
                      <img src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/seo-marketing-icon.png" />
                    </div>
                    <h3 className="our-serv-icon-h3">24x7 Support</h3>
                    <p className="our-serv-icon-p">
                      Nam id molestie felis, ac tristique lorem. Morbi mauris
                      libero, cursus.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* end of services */}

      <div className="service-news-letter">
        <NewsLetters />
      </div>

      <Pricing />

      <Portfolio />

      <Footer />
    </div>
  );
}

export default Services;
