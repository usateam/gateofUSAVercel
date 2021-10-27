/**
 *
 * Layout
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Header } from '../Header/Loadable';
import { PreHeader } from '../PreHeader/Loadable';

// interface Props {}

export const Layout = ({ children }) => {
  return (
    <Div>
      <PreHeader />
      <Header />
      {children}
    </Div>
  );
};

const Div = styled.div``;
