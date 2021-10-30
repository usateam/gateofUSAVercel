/**
 *
 * Service
 *
 */
import React, { memo, useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
import ServiceMenuItem from './ServiceMenuItem/index';
import base from '../../api/base';
import ServiceDetail from './ServiceDetail/index';
// import { selectService } from './slice/selectors';
// import {  } from './slice/types';
// import { useServiceSlice } from './slice';

export const Service = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  // const { actions } = useServiceSlice();
  // const menuId = useSelector(selectService);

  const [service, setService] = useState([]);
  const [detail, setDetail] = useState([]);

  // const dispatch = useDispatch();
  // console.log('menuId ServiceIndex', menuId);
  useEffect(() => {
    base('services')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setService(records);
        // console.log('services records ', records);
        // console.log('airtable records value ', records.map(a=>a.fields));
        fetchNextPage();
      });
    base('servicedetail')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setDetail(records);
        // console.log('services detail records ', records);
        // console.log('airtable records value ', records.map(a=>a.fields));
        fetchNextPage();
      });
  }, []);

  return (
    <Div>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Our Services</h6>
                <h4>
                  What Our Agency <em>Provides</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        {service.map(src => (
                          <ServiceMenuItem
                            key={src.id}
                            service={src}
                            // details={detail.filter(
                            //   dt => dt.fields.serviceid[0] === src.id,
                            // )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <ul className="nacc">
                {detail
                  // .filter(x => x.fields.serviceid[0] === menuId)
                  .map(dt => (
                    <ServiceDetail
                      key={dt.id}
                      details={dt}
                      // {detail.filter(
                      //   dt => dt.fields.serviceid[0] === dt.id,
                      // )}
                    />
                  ))}
                {/* {service.map(src => (
                  <ServiceDetail
                    key={src.id}
                    details={detail.filter(
                      dt => dt.fields.serviceid[0] === src.id,
                    )}
                  />
                ))} */}
              </ul>
            </div>

            {/* <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-01.png"
                                alt=""
                              />
                            </span>
                            Apartments
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-02.png"
                                alt=""
                              />
                            </span>
                            Food &amp; Life
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-03.png"
                                alt=""
                              />
                            </span>
                            Cars
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-04.png"
                                alt=""
                              />
                            </span>
                            Shopping
                          </div>
                        </div>
                        <div className="last-thumb">
                          <div className="thumb">
                            <span className="icon">
                              <img
                                src="assets/images/service-icon-01.png"
                                alt=""
                              />
                            </span>
                            Traveling
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>SEO Analysis &amp; Daily Reports</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img
                                      src="assets/images/services-image.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Healthy Food &amp; Life</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img
                                      src="assets/images/services-image-02.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Car Re-search &amp; Transport</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img
                                      src="assets/images/services-image-03.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Online Shopping &amp; Tracking ID</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img
                                      src="assets/images/services-image-04.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="left-text">
                                    <h4>Enjoy &amp; Travel</h4>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt ut labore et dolore
                                      kengan darwin doerski token. dover lipsum
                                      lorem and the others.
                                    </p>
                                    <div className="ticks-list">
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>
                                      <span>
                                        <i className="fa fa-check"></i> Data
                                        Info
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i> SEO
                                        Analysis
                                      </span>{' '}
                                      <span>
                                        <i className="fa fa-check"></i>{' '}
                                        Optimized Template
                                      </span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis
                                      tempor incididunt.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="right-image">
                                    <img
                                      src="assets/images/services-image.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
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
