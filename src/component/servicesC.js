import React from "react";
import "./servicesC.css";
import { Col, Container, Row } from "react-bootstrap";

function ServicesC() {
  return (
    <>
      <section className="main-our-services">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="our-services-title">
                <span className="sub-serv-title">OUR SERVICES</span>
                <h2 className="h2-serv-title">Awesome Services</h2>
              </div>
            </Col>
          </Row>
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
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ServicesC;
