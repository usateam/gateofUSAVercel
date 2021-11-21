/**
 *
 * PreHeader
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import { messages } from './messages';

interface Props {}

export const PreHeader = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-7">
              <ul className="info">
                <li>
                  <Link href="/" to={''}>
                    {' '}
                    <i className="fa fa-envelope"></i>info@classelector.com{' '}
                  </Link>

                  {/* <a href="/">
                    <i className="fa fa-envelope"></i>digimedia@company.com
                  </a> */}
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-phone"></i>010-020-0340
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-4 col-5">
              <ul className="social-media">
                <li>
                  <a href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="/">
                    <i className="fa fa-behance"></i>
                  </a>
                </li> */}
                <li>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="/">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div``;
