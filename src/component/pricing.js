import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import "./pricing.css";

function Pricing() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="main-pricing">
      <Container>
        <Row>
          <Col>
            <div className="pricing-title">
              <span className="sub-title">PRICING PLANE</span>
              <h2 className="h2-title">Choose Our Plane</h2>
            </div>
          </Col>
        </Row>

        <Slider {...settings}>
          {/* slide 1 */}
          <div>
            <div className="pricing-box">
              <div className="pricing-box-text">
                <h3 className="h3-title">Company</h3>
                <div className="pricing-img">
                  <img
                    src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/company.png"
                    alt="pricing-1st-img"
                  />
                </div>
                <h4 className="h4-title">
                  "$25"
                  <span>/Month</span>
                </h4>
                <div className="pricing-text-list">
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li className="disabled">Lorem ipsum dolor sit amet.</li>
                    <li className="disabled">Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
                <a className="sec-btn" href="#">
                  Join Now
                </a>
              </div>
            </div>
          </div>

          {/* slide 2 */}
          <div>
            <div className="pricing-box">
              <div className="pricing-box-text">
                <h3 className="h3-title">Company</h3>
                <div className="pricing-img">
                  <img
                    src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/company.png"
                    alt="pricing-1st-img"
                  />
                </div>
                <h4 className="h4-title">
                  "$25"
                  <span>/Month</span>
                </h4>
                <div className="pricing-text-list">
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li className="disabled">Lorem ipsum dolor sit amet.</li>
                    <li className="disabled">Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
                <a className="sec-btn" href="#">
                  Join Now
                </a>
              </div>
            </div>
          </div>

          {/* slide 3 */}
          <div>
            <div className="pricing-box">
              <div className="pricing-box-text">
                <h3 className="h3-title">Company</h3>
                <div className="pricing-img">
                  <img
                    src="https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/company.png"
                    alt="pricing-1st-img"
                  />
                </div>
                <h4 className="h4-title">
                  "$25"
                  <span>/Month</span>
                </h4>
                <div className="pricing-text-list">
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li className="disable">Lorem ipsum dolor sit amet.</li>
                    <li className="disable">Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
                <a className="sec-btn" href="#">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
}

export default Pricing;
