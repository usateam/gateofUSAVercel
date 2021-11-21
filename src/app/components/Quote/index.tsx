/**
 *
 * Quote
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export const Quote = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <Div>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <div id="free-quote" className="free-quote">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div
                className="section-heading  wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h6>Class Selector</h6>
                <h4>Grow With Us Now</h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div
              className="col-lg-8 offset-lg-2  wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              {/* <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <div>
                      <input
                        type="web"
                        name="web"
                        className="website"
                        placeholder="Your website URL..."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div>
                      <button type="submit" className="main-button">
                        Get Quote Now
                      </button>
                    </div>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div``;
