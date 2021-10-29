import React from 'react';

const Index = ({ item }) => {
  return (
    <>
      <div className="col-lg-6">
        <div
          className="about-left-image  wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          {/* <img src="assets/images/about-dec.png" alt="" /> */}
          <img src={item.fields.Attachments[0].url} alt="" />
        </div>
      </div>
      <div
        className="col-lg-6 align-self-center  wow fadeInRight"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="about-right-content">
          <div className="section-heading">
            <h6>{item.fields.smalltitle}</h6>
            <h4>
              {item.fields.bigtitle} <em>Agency</em>
            </h4>
            <div className="line-dec"></div>
          </div>
          <p>{item.fields.description} </p>
          <div className="row">
            <div className="col-lg-4 col-sm-4">
              <div
                className="skill-item first-skill-item wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="progress" data-percentage="90">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div>
                      90%
                      <br />
                      <span>Coding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div
                className="skill-item second-skill-item wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="progress" data-percentage="80">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div>
                      80%
                      <br />
                      <span>Photoshop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div
                className="skill-item third-skill-item wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="progress" data-percentage="80">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div>
                      80%
                      <br />
                      <span>Animation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
