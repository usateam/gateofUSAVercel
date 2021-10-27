import { About } from 'app/components/About/Loadable';
import { Banner } from 'app/components/Banner/Loadable';
import { Blog } from 'app/components/Blog/Loadable';
import { Contact } from 'app/components/Contact/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { Layout } from 'app/components/Layout/Loadable';
import { Portfolio } from 'app/components/Portfolio/Loadable';
import { PreHeader } from 'app/components/PreHeader/Loadable';
import { Projects } from 'app/components/Projects/Loadable';
import { Quote } from 'app/components/Quote/Loadable';
import { Service } from 'app/components/Service/Loadable';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/* <PreHeader />
        <Header /> */}
      <Banner />
      <About />
      <Service />
      <Quote />
      {/* <Portfolio /> */}
      <Projects />

      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}
