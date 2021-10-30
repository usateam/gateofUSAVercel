import React from 'react';
import { useSelector } from 'react-redux';
import { selectService } from '../slice/selectors';

const Index = ({ details }) => {
  const menuId = useSelector(selectService);

  //   console.log('menuID ', menuId);
  //   console.log('detailllll ', details);
  //   console.log('detailllll serviceID ', details.fields.serviceid[0]);
  //   console.log('detailllll fields', details.fields); serviceId(menuID) == details.fields.serviceId[0]
  return (
    <>
      <li className={details.fields.serviceid[0] === menuId ? 'active' : ''}>
        <div>
          <div className="thumb">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-text">
                  {/* <h4>SEO Analysis &amp; Daily Reports</h4> */}
                  <h4>{details.fields.contenttitle}</h4>
                  <p>{details.fields.content}</p>
                  <div className="ticks-list">
                    <span>
                      <i className="fa fa-check"></i> {details.fields.listitem}
                    </span>{' '}
                    {/* <span>
                      <i className="fa fa-check"></i> Data Info
                    </span>{' '}
                    <span>
                      <i className="fa fa-check"></i> SEO Analysis
                    </span>
                    <span>
                      <i className="fa fa-check"></i> Data Info
                    </span>{' '}
                    <span>
                      <i className="fa fa-check"></i> SEO Analysis
                    </span>{' '}
                    <span>
                      <i className="fa fa-check"></i> Optimized Template
                    </span> */}
                  </div>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedr do eiusmod deis tempor incididunt.
                  </p> */}
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image">
                  {/* <img src="assets/images/services-image.jpg" alt="" /> */}
                  <img src={details.fields.contentimage[0].url} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* <li className="active">
        <div>
          <div class="thumb">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div class="left-text">
                  <h4>Enjoy &amp; Travel</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedr do eiusmod deis tempor incididunt ut labore et dolore
                    kengan darwin doerski token. dover lipsum lorem and the
                    others.
                  </p>
                  <div class="ticks-list">
                    <span>
                      <i class="fa fa-check"></i> Optimized Template
                    </span>{' '}
                    <span>
                      <i class="fa fa-check"></i> Data Info
                    </span>{' '}
                    <span>
                      <i class="fa fa-check"></i> SEO Analysis
                    </span>
                    <span>
                      <i class="fa fa-check"></i> Data Info
                    </span>{' '}
                    <span>
                      <i class="fa fa-check"></i> SEO Analysis
                    </span>{' '}
                    <span>
                      <i class="fa fa-check"></i> Optimized Template
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedr do eiusmod deis tempor incididunt.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="right-image">
                  <img src="assets/images/services-image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li> */}
    </>
  );
};

export default Index;
