/**
 *
 * Portfolio
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './owl.css';

interface Props {}

export const Portfolio = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div id="portfolio" className="our-portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div
              className="section-heading wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <h6>Our Portofolio</h6>
              <h4>
                See Our Recent <em>Projects</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.7s"
      >
        <div className="row">
          <div className="col-lg-12">
            {/* <div className="item">
                <a href="/">
                  <div className="portfolio-item">
                    <div className="thumb">
                      <img src="assets/images/portfolio-01.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                </a>
              </div>
 */}

            {/* <div className="loop owl-carousel"> */}
            <div className="loop owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transition: 'all 0.25s ease 0s',
                    width: '3898px',
                    transform: 'translate3d(-1039px, 0px, 0px)',
                  }}
                >
                  <div className="owl-item cloned" style={{ width: '259.8px' }}>
                    <div className="item">
                      <a href="/">
                        <div className="portfolio-item">
                          <div className="thumb">
                            <img src="assets/images/portfolio-01.jpg" alt="" />
                          </div>
                          <div className="down-content">
                            <h4>Website Builder</h4>
                            <span>Marketing</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* <div className="item">
                    <a href="/">
                      <div className="portfolio-item">
                        <div className="thumb">
                          <img src="assets/images/portfolio-01.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>Website Builder</h4>
                          <span>Marketing</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="/">
                      <div className="portfolio-item">
                        <div className="thumb">
                          <img src="assets/images/portfolio-02.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>Website Builder</h4>
                          <span>Marketing</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="/">
                      <div className="portfolio-item">
                        <div className="thumb">
                          <img src="assets/images/portfolio-03.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>Website Builder</h4>
                          <span>Marketing</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="/">
                      <div className="portfolio-item">
                        <div className="thumb">
                          <img src="assets/images/portfolio-04.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>Website Builder</h4>
                          <span>Marketing</span>
                        </div>
                      </div>
                    </a>
                  </div> */}

                </div>
              </div>
              <div className="owl-nav disabled"></div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Div = styled.div``;
