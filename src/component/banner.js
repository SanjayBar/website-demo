import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";

function Banner() {
  return (
    <>
      <section className="main-banner">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <div className="banner-content">
                <span className="wel-span">Welcome</span>
                <h1 className="wel-h1">Smart Ideas For Your Brand Here</h1>
                <p className="wel-p1">
                  Duis fringilla ultrices tellus, vel imperdiet diam fringilla
                  non. Integer porttitor, lectus nec ornare molestie.
                </p>
                <a href="#" className="sec-btn">
                  contact us now
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-img"></div>
              <img
                src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/banner-img.svg"
                alt="img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
