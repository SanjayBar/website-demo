import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SimpleTestSlider from "./testimonialSlider";
import "./testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="main-testimonial">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <div className="testimonial-content">
                <span className="sub-title">TESTIMONIAL</span>
                <h2 className="h2-title">See what our client say's</h2>
                <p>
                  Vivamus augue quam, sagittis vitae faucibus et, pharetra id
                  orci. Maecenas tempus at magna sit amet tempus. Vestibulum
                  augue lectus, mattis et eleifend a, porta eu est. Cras nec
                  lobortis tortor, a dignissim odio.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="main-testimonial-slider">
                <div className="testimonial-slider-box">
                  <SimpleTestSlider />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Testimonials;
