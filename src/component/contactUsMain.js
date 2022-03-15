import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contactUsMain.css";

function ContactUsMain() {
  return (
    <>
      <div className="main-contact-us">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xl={8} lg={9}>
              <div className="contact-us-content">
                <span className="sub-title">Contact Us</span>
                <h4 className="h4-title">Get In Touch With Us</h4>
                <div className="contact-form">
                  <Row>
                    <Col md={6}>
                      <div className="form-box">
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="First Name"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-box">
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="Last Name"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-box">
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder="Email..."
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-box">
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="Phone No. "
                        />
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="form-box">
                        <textarea
                          type="text"
                          required
                          style={{ minHeight: "6rem" }}
                          className="form-input"
                          placeholder="Message..."
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="form-box">
                        <button type="submit" className="sec-btn">
                          <span>Submit Now</span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="empty-contact-us-div"></div>
    </>
  );
}

export default ContactUsMain;
