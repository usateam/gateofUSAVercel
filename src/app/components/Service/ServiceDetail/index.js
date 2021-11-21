import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectService } from '../slice/selectors';
import styled from 'styled-components/macro';
import base from '../../../api/base';

const Index = ({ details, technolist }) => {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   base('technolist')
  //     .select({ view: 'Grid view' })
  //     .eachPage((records, fetchNextPage) => {
  //       setList(records);
  //       console.log('techno records ', records);
  //       // console.log('airtable records value ', records.map(a=>a.fields));
  //       fetchNextPage();
  //     });
  // }, []);

  console.log('technolist-detail ', technolist);
  // console.log('details - inner ', details);
  // console.log('details - inner id ', details.id);

  const menuId = useSelector(selectService);

  // console.log('menuID ', menuId);
  // console.log('detailllll ', details);
  // console.log('detailllll serviceID ', details.fields.serviceid[0]);
  // console.log('detailllll fields ', details.fields);
  // console.log('detailllll technolist ', details.fields.technolist[0]);
  //   console.log('detailllll fields', details.fields); serviceId(menuID) == details.fields.serviceId[0]
  return (
    <>
      <li className={details.fields.serviceid[0] === menuId ? 'active' : ''}>
        <Div>
          <div className="thumb">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-text">
                  {/* <h4>SEO Analysis &amp; Daily Reports</h4> */}
                  <h4>{details.fields.contenttitle}</h4>
                  <p>{details.fields.content}</p>
                  <div className="ticks-list arrange">
                    {/* <span>
                      <i className="fa fa-check"></i> {details.fields.listitem}
                    </span>{' '} */}
                    {technolist
                      .filter(
                        x =>
                          // 'recBwyGgzBzLm1Wqw' === details.id,
                          x.fields.servicedetail[0] === details.id,
                      )
                      .map(item => (
                        <span key={item.id} className="item">
                          <img
                            src={item.fields.icons[0].url}
                            alt=""
                            width="50px"
                            height="50px"
                            className="image"
                          />{' '}
                          {item.fields.description}
                        </span>
                      ))}
                    {/* <span className="item">
                      <img
                        src="assets/icons/net-core.svg"
                        alt=""
                        width="30px"
                        height="30px"
                        className="image"
                      />{' '}
                      .Net Core
                    </span>{' '} */}
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
        </Div>
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

const Div = styled.div`
  .arrange {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 300px;
    width: 200px;
  }
  .item {
    display: flex;
    justify-content: space-evenly;
    width: 300px;
  }
  .image {
    width: 20%;
  }
`;
