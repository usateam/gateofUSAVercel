/**
 *
 * About
 *
 */
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
import base from '../../api/base';
import AboutDetail from './AboutDetail/index';

export const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const [about, setAbout] = useState([]);

  useEffect(() => {
    base('about')
      .select({ maxRecords: 1, view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setAbout(records);
        // console.log('about records ', records);
        fetchNextPage();
      });
  }, []);

  // console.log('about detail ', about);

  return (
    <Div>
      <div id="about" className="about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {about.map(item => (
                  <AboutDetail key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div``;
