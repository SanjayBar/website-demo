import React, { Component } from "react";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="team-box">
              <div className="team-text">
                <div className="team-social">
                  <div className="team-social-box">
                    <FaFacebookF className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaInstagram className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaTwitter className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaYoutube className="iconn" />
                  </div>
                </div>
                <div
                  className="team-img back-img"
                  style={{
                    backgroundImage:
                      "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/team-img2.jpg')",
                  }}
                ></div>
              </div>
              <div className="team-text-box">
                <p>Designer</p>
                <h3 className="h3-title">Dawon Crisen</h3>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div>
            <div className="team-box">
              <div className="team-text">
                <div className="team-social">
                  <div className="team-social-box">
                    <FaFacebookF className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaInstagram className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaTwitter className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaYoutube className="iconn" />
                  </div>
                </div>
                <div
                  className="team-img back-img"
                  style={{
                    backgroundImage:
                      "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/team-img6.jpg')",
                  }}
                ></div>
              </div>
              <div className="team-text-box">
                <p>Designer</p>
                <h3 className="h3-title">Gerard piano</h3>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div>
            <div className="team-box">
              <div className="team-text">
                <div className="team-social">
                  <div className="team-social-box">
                    <FaFacebookF className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaInstagram className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaTwitter className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaYoutube className="iconn" />
                  </div>
                </div>
                <div
                  className="team-img back-img"
                  style={{
                    backgroundImage:
                      "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/team-img2.jpg')",
                  }}
                ></div>
              </div>
              <div className="team-text-box">
                <p>Designer</p>
                <h3 className="h3-title">Dawon Crisen</h3>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div>
            <div className="team-box">
              <div className="team-text">
                <div className="team-social">
                  <div className="team-social-box">
                    <FaFacebookF className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaInstagram className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaTwitter className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaYoutube className="iconn" />
                  </div>
                </div>
                <div
                  className="team-img back-img"
                  style={{
                    backgroundImage:
                      "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/team-img6.jpg')",
                  }}
                ></div>
              </div>
              <div className="team-text-box">
                <p>Designer</p>
                <h3 className="h3-title">Gerard piano</h3>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div>
            <div className="team-box">
              <div className="team-text">
                <div className="team-social">
                  <div className="team-social-box">
                    <FaFacebookF className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaInstagram className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaTwitter className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaYoutube className="iconn" />
                  </div>
                </div>
                <div
                  className="team-img back-img"
                  style={{
                    backgroundImage:
                      "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/team-img2.jpg')",
                  }}
                ></div>
              </div>
              <div className="team-text-box">
                <p>Designer</p>
                <h3 className="h3-title">Dawon Crisen</h3>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div>
            <div className="team-box">
              <div className="team-text">
                <div className="team-social">
                  <div className="team-social-box">
                    <FaFacebookF className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaInstagram className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaTwitter className="iconn" />
                  </div>
                  <div className="team-social-box">
                    <FaYoutube className="iconn" />
                  </div>
                </div>
                <div
                  className="team-img back-img"
                  style={{
                    backgroundImage:
                      "url('https://shivaa.dexignzone.com/shivaa-HTML/homepage_1/assets/images/team-img6.jpg')",
                  }}
                ></div>
              </div>
              <div className="team-text-box">
                <p>Designer</p>
                <h3 className="h3-title">Gerard piano</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
