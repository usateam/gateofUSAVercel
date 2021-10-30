/**
 *
 * Banner
 *
 */
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
// import { Link } from 'react-router-dom';
// import { visible } from 'chalk';
import base from '../../api/base';
// import Airtable, { Record, FieldSet } from 'airtable';
import BannerDetail from '../Banner/BannerDetail';

// interface Props {}

export const Banner = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  const [text, setText] = useState([]);

  useEffect(() => {
    base('home')
      .select({ maxRecords: 1, view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        // result.push(records);
        setText(records);
        // console.log('airtable records ', records);
        fetchNextPage();
      });
  }, []);

  // console.log('textt ', text);
  // console.log('textt field ', text[0].fields);

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
              {text.map(item => (
                <BannerDetail key={item.id} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Div = styled.div`
//   visibility: visible;
//   -webkit-animation-duration: 1s;
//   -moz-animation-duration: 1s;
//   animation-duration: 1s;
//   -webkit-animation-delay: 0.5s;
//   -moz-animation-delay: 0.5s;
//   animation-delay: 0.5s;
// `;
