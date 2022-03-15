import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleTestSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="review-box">
            <p>
              Vestibulum blandit lorem quis urna luctus, a pellentesque ligula
              tincidunt. Vestibulum posuere ornare magna eget luctus nam
              fringilla aliquet sapien.
            </p>
            <h3 className="h3-title">John Doe</h3>
            <span>Designer</span>
            <div
              className="review-img back-img"
              style={{
                backgroundImage:
                  "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/review-img.jpg')",
              }}
            ></div>
          </div>

          <div className="review-box">
            <p>
              Vestibulum blandit lorem quis urna luctus, a pellentesque ligula
              tincidunt. Vestibulum posuere ornare magna eget luctus nam
              fringilla aliquet sapien.
            </p>
            <h3 className="h3-title">John Doe</h3>
            <span>Designer</span>
            <div
              className="review-img back-img"
              style={{
                backgroundImage:
                  "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/review-img.jpg')",
              }}
            ></div>
          </div>
        </Slider>
      </div>
    );
  }
}
