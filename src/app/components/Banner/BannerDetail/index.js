import React from 'react';

export default function Index({ text }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div
            className="left-content show-up header-text wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div className="row">
              <div className="col-lg-12">
                <h6> {text.fields.smalltitle} </h6>
                <h2>{text.fields.bigtitle}</h2>
                <p>{text.fields.description}</p>
              </div>
              <div className="col-lg-12">
                <div className="border-first-button scroll-to-section">
                  {/* <a href="#contact">Free Quote</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="right-image wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            {/* <img src="template2/assets/images/about-left-image.png" alt="" /> */}
            <img src={text.fields.Attachments[0].url} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
