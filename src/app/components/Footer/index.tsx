/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export const Footer = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <Div>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2022 DigiMedia Co., Ltd. All Rights Reserved.
                <br />
                Design:{' '}
                <a
                  href="https://templatemo.com"
                  target="_parent"
                  title="free css templates"
                >
                  TemplateMo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Div>
  );
});

const Div = styled.div``;
