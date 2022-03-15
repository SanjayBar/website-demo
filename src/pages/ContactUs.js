import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/navBar";
import Footer from "../component/footer";
import "./ContactUs.css";
import { OtechContext } from "../otechContext";

function ContactUs() {
  const { setIsSubmenuOpen } = React.useContext(OtechContext);

  return (
    <div className="main">
      <NavBar />

      <section onMouseOver={() => setIsSubmenuOpen("")}>
        <section
          className="main-banner inner-banner contact-banner"
          style={{
            backgroundImage:
              "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/inner-banner-bg.jpg')",
          }}
        >
          <Container>
            <Row>
              <Col>
                <div className="banner-content">
                  <h1 className="h1-title">Contact Us</h1>
                  <div className="breadcrumb-box">
                    <ul>
                      <li>
                        <a href="#" title="home">
                          Home
                        </a>
                      </li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="contact-page-content">
          <Container>
            <Row className="d-flex align-items-center">
              {/* form */}
              <Col lg={6} className="order-lg-2">
                <div className="contact-page-form">
                  <div className="contact-form">
                    <form>
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
                        <Col>
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
                      </Row>
                      <Col>
                        <div className="form-box">
                          <button type="submit" className="sec-btn">
                            <span>Submit Now</span>
                          </button>
                        </div>
                      </Col>
                    </form>
                  </div>
                </div>
              </Col>
              {/* img */}
              <Col lg={6} className="order-lg-1">
                <div className="contact-page-img">
                  <img
                    src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/contact-us-img.svg"
                    alt="contact-img"
                  />
                </div>
              </Col>
            </Row>

            {/* Contant page link */}
            <div className="contact-page-link">
              <Row className="d-flex justify-content-center">
                <Col lg={4} sm={6}>
                  <div className="contact-link-box">
                    <div className="contact-link-text">
                      <div className="contact-link-icon">
                        <img
                          src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/call-icon.png"
                          alt="call-icon"
                        />
                      </div>
                      <h3 className="h3-title">Call Now</h3>
                      <p>
                        <a href="#" title="Call on +91 784 7849 784">
                          +91 784 7849 784
                        </a>
                      </p>
                      <p>
                        <a href="#" title="Call on +91 874 8745 987">
                          +91 874 8745 987
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={4} sm={6}>
                  <div className="contact-link-box">
                    <div className="contact-link-text">
                      <div className="contact-link-icon">
                        <img
                          src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/map-icon.png"
                          alt="call-icon"
                        />
                      </div>
                      <h3 className="h3-title">Location</h3>
                      <p>
                        <a href="#" title="go to location">
                          1247/Plot No. 39, 15th Phase, Colony, Kukatpally,
                          Hyderabad
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={4} sm={6}>
                  <div className="contact-link-box">
                    <div className="contact-link-text">
                      <div className="contact-link-icon">
                        <img
                          src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/mail-icon.png"
                          alt="call-icon"
                        />
                      </div>
                      <h3 className="h3-title">Email Address</h3>
                      <p>
                        <a href="#" title="email-address">
                          info@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="#" title="email-address">
                          services@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* Contact map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4866745353074!2d91.7741746!3d26.180842299999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59e03e809259%3A0xe49edfaf368d7946!2sODOMETRY%20TECHNIX!5e0!3m2!1sen!2sin!4v1646728749510!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-page-empty-div"></div>
        <Footer />
      </section>
    </div>
  );
}

export default ContactUs;
