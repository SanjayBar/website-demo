import React from "react";
import "./newsLetter.css";
import { Col, Container, Row } from "react-bootstrap";

function NewsLetter() {
  return (
    <>
      <section className="main-newsletter">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xl={6} lg={7}>
              <div className="newsletter-content">
                <span className="sub-title">NEWSLETTER</span>
                <h4 className="h4-title">Subscribe Now</h4>
                <p>
                  Fusce mollis sed odio nec dapibus. Phasellus gravida luctus
                  erat sit amet scelerisque. Praesent sollicitudin non dui eget
                  consequat.
                </p>
                <div className="newsletter-form">
                  <form>
                    <div className="form-box">
                      <input
                        type="email"
                        name="news-email"
                        className="form-input"
                        required
                        placeholder="Email Address..."
                      ></input>
                      <button className="sec-btn">
                        <span>Subscribe Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NewsLetter;
