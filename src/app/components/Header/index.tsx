/**
 *
 * Header
 *
 */
import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Link, useLocation } from 'react-router-dom';

interface Props {}

export const Header = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');

  // const location = useLocation();
  // const { pathname } = location;

  // const splitLocation = pathname.split('/');
  // console.log("splitLocation ",splitLocation);

  function handleTrigger() {
    // console.log('toggle-1: ', toggle);
    setToggle(!toggle);
    // console.log('toggle-2: ', toggle);
  }

  // useEffect(() => {
  //   console.log("useEffect", active)
  //   setActive(active);
  // }, [active]);

  // function handleActive(e) {
  //   // console.log("e ", e);
  //   // console.log("e hash", e.target);
  //   // console.log("e hash", e.target.href);
  //   // console.log("e hash", e.target.innerHtml);
  //   setActive(active);

  //   console.log('e className', e.target.innerText);
  //   setActive('');
  //   console.log('active-1 ', active);
  //   const aaa = e.target.innerText;
  //   setActive(aaa);
  //   console.log('active ', active);
  // }

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}

      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <img src="assets/images/logo-v1.png" alt="" />
                </a>
                <ul
                  className="nav"
                  style={toggle ? { display: 'block' } : { display: 'none' }}
                >
                  <li className="scroll-to-section">
                    <a
                      href="#top"
                      // className="active"
                      // className={active === 'Home' ? 'active' : ''}
                      onClick={handleTrigger}
                      // onClick={() => setActive('Home')}
                    >
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a
                      href="#about"
                      // className={active === 'About' ? 'active' : ''}
                      onClick={handleTrigger}
                      // onClick={() => setActive('About')}

                    >
                      About
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a
                      href="#services"
                      // className={active === 'Services' ? 'active' : ''}
                      onClick={handleTrigger}
                      // onClick={() => setActive('Services')}
                    >
                      Services
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a
                      // href="#portfolio"
                      href="#features"
                      // className={active === 'Projects' ? 'active' : ''}
                      onClick={handleTrigger}
                    >
                      Projects
                    </a>
                  </li>
                  {/* <li className="scroll-to-section">
                    <a
                      href="#blog"
                      // className={active === 'Blog' ? 'active' : ''}
                      // onClick={handleTrigger}
                    >
                      Blog
                    </a>
                  </li> */}
                  <li className="scroll-to-section">
                    <a
                      href="#contact"
                      // className={active === 'Contact' ? 'active' : ''}
                      onClick={handleTrigger}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <div className="border-first-button">
                      {/* <a href="#contact">Free Quote</a> */}
                    </div>
                  </li>
                </ul>
                {/* <a className="menu-trigger">
                  <span>Menu</span>
                </a> */}
                <Link
                  href=""
                  to=""
                  className={toggle ? 'menu-trigger active' : 'menu-trigger'}
                  onClick={handleTrigger}
                >
                  <span>Menu</span>
                </Link>

                {/* <a
                  className={toggle ? 'menu-trigger active' : 'menu-trigger'}
                  onClick={handleTrigger}
                >
                  <span>Menu</span>
                </a> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
});

const Div = styled.div``;
