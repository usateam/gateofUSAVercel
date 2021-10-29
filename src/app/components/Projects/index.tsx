/**
 *
 * Projects
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Projects = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <div id="features" className="features section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="features-content">
                <div className="row">
                  <div className="col-lg-3">
                    <a href="/">
                      <div
                        className="features-item first-feature wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="first-number number">
                          <h6>01</h6>
                        </div>
                        <div className="icon"></div>
                        <h4>Reach Out</h4>
                        <div className="line-dec"></div>
                        <p>
                          This HTML5 template is based on Bootstrap 5 CSS. You
                          are free to customize anything.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="features-item second-feature wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <div className="second-number number">
                        <h6>02</h6>
                      </div>
                      <div className="icon"></div>
                      <h4>Develop a Strategy</h4>
                      <div className="line-dec"></div>
                      <p>
                        Lorem ipsum dolor sit ameter consectetur adipiscing li
                        elit sed do eiusmod.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="features-item first-feature wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <div className="third-number number">
                        <h6>03</h6>
                      </div>
                      <div className="icon"></div>
                      <h4>Implementation</h4>
                      <div className="line-dec"></div>
                      <p>
                        If this template is useful for your website, please
                        consider to{' '}
                        {/* <a
                          rel="nofollow"
                          href="https://www.paypal.me/templatemo"
                          target="_blank"
                        >
                          support us
                        </a>{' '} */}
                        a little.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="features-item second-feature last-features-item wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                    >
                      <div className="fourth-number number">
                        <h6>04</h6>
                      </div>
                      <div className="icon"></div>
                      <h4>Analyze the result</h4>
                      <div className="line-dec"></div>
                      <p>
                        Below circular progress bar animation supports those CSS
                        values 10, 20, 30, till 100.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="skills-content">
                <div className="features-content">
                  <div className="row">
                    <div className="col-lg-3">
                      <div
                        className="features-item first-feature wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="first-number number">
                          <h6>05</h6>
                        </div>
                        <div className="icon"></div>
                        <h4>Reach Out</h4>
                        <div className="line-dec"></div>
                        <p>
                          This HTML5 template is based on Bootstrap 5 CSS. You
                          are free to customize anything.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="features-item second-feature wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.2s"
                      >
                        <div className="second-number number">
                          <h6>06</h6>
                        </div>
                        <div className="icon"></div>
                        <h4>Develop a Strategy</h4>
                        <div className="line-dec"></div>
                        <p>
                          Lorem ipsum dolor sit ameter consectetur adipiscing li
                          elit sed do eiusmod.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="features-item first-feature wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.4s"
                      >
                        <div className="third-number number">
                          <h6>07</h6>
                        </div>
                        <div className="icon"></div>
                        <h4>Implementation</h4>
                        <div className="line-dec"></div>
                        <p>
                          If this template is useful for your website, please
                          consider to{' '}
                          {/* <a
                          rel="nofollow"
                          href="https://www.paypal.me/templatemo"
                          target="_blank"
                        >
                          support us
                        </a>{' '} */}
                          a little.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="features-item second-feature last-features-item wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.6s"
                      >
                        <div className="fourth-number number">
                          <h6>08</h6>
                        </div>
                        <div className="icon"></div>
                        <h4>Analyze the result</h4>
                        <div className="line-dec"></div>
                        <p>
                          Below circular progress bar animation supports those
                          CSS values 10, 20, 30, till 100.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* alltaki yüzdelikler panosu */}
            {/* <div className="col-lg-12">
              <div className="skills-content">
                <div className="row">
                  <div className="col-lg-3">
                    <div
                      className="skill-item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0s"
                    >
                      <div className="progress" data-percentage="80">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>
                            80%
                            <br />
                            <span>HTML/CSS/JS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="skill-item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <div className="progress" data-percentage="60">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>
                            60%
                            <br />
                            <span>Wordpress</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="skill-item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <div className="progress" data-percentage="90">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>
                            90%
                            <br />
                            <span>Marketing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="skill-item last-skill-item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                    >
                      <div className="progress" data-percentage="70">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>
                            70%
                            <br />
                            <span>Photoshop</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div``;
