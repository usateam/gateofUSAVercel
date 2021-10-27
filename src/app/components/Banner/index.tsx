/**
 *
 * Banner
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Link } from 'react-router-dom';
import { visible } from 'chalk';

interface Props {}

export const Banner = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className="main-banner wow fadeIn animated"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
        style={{
          visibility: 'visible',
          WebkitAnimationDuration: '1s',
          MozAnimationDuration: '1s',
          animationDuration: '1s',
          WebkitAnimationDelay: '0.5s',
          MozAnimationDelay: '0.5s',
          animationDelay: '0.5s',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Digital Media Agency</h6>
                        <h2>We Boost Your Website Traffic</h2>
                        <p>
                          This template is brought to you by TemplateMo website.
                          Feel free to use this for a commercial purpose. You
                          are not allowed to redistribute the template ZIP file
                          on any other template website. Thank you.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-first-button scroll-to-section">
                          {/* <a href="#contact">Free Quote</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    {/* <img src="assets/images/slider-dec.png" alt="" /> */}
                    <img
                      src="template2/assets/images/about-left-image.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const Div = styled.div`
  visibility: visible;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  animation-delay: 0.5s;
`;

// const UL = styled.ul`
//     margin: 0px;
//     padding: 0px;
// `;

