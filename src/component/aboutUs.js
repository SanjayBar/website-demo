import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./aboutUs.css";

function AboutUs() {
  return (
    <section className="main-about-us">
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <div className="about-img-box">
              <img
                src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/about-img.svg"
                alt="about-img"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <span className="sub-title">ABOUT US</span>
              <h2 className="h2-title">Boosts Your Website Traffic !</h2>
              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sit amet tempor nibh. Quisque varius interdum cursus.
                </p>
                <p>
                  Nullam at suscipit mauris. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Vestibulum vel justo sit amet leo ultricies tempus
                  tempus vel orci. Suspendisse at mauris ut ante hendrerit
                  aliquam. Mauris varius justo nec ex viverra rutrum at a eros.
                </p>
              </div>
              <a href="#" className="sec-btn">
                contact us now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
