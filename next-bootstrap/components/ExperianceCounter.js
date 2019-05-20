import React, { Component } from 'react';
import CountUp from 'react-countup';
// import counterCSS from '../static/css/counter.css'


export default class ExperianceCounter extends Component {
  
  // change code above this line
  render() {
    const BGimg = "/static/img/counters-bg.jpg";
      return (
          <div className="section-counter paralax-mf bg-image" >
            <div className="overlay-mf" />
            <div className="container">
              <div className="row">
                <div className="col-sm-3 col-lg-3">
                  <div className="counter-box counter-box pt-4 pt-md-0" >
                    <div className="counter-ico">
                      <span className="ico-circle"><i className="ion-checkmark-round" /></span>
                    </div>
                    <div className="counter-num">
                      <CountUp end={5} className="counter"/>
                      <span className="counter-text">YEARS OF EXPERIENCE</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                  <div className="counter-box pt-4 pt-md-0">
                    <div className="counter-ico">
                      <span className="ico-circle"><i className="ion-ios-calendar-outline" /></span>
                    </div>
                    <div className="counter-num">
                      <CountUp end={50} className="counter"/>
                      <span className="counter-text">PROJECTS</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                  <div className="counter-box pt-4 pt-md-0">
                    <div className="counter-ico">
                      <span className="ico-circle"><i className="ion-ios-people" /></span>
                    </div>
                    <div className="counter-num">
                      <CountUp end={20} className="counter"/>
                      <span className="counter-text">TOTAL CLIENTS</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                  <div className="counter-box pt-4 pt-md-0">
                    <div className="counter-ico">
                      <span className="ico-circle"><i className="ion-ribbon-a" /></span>
                    </div>
                    <div className="counter-num">
                      <CountUp end={4} className="counter"/>
                      <span className="counter-text">AWARD WON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <>
          <style global jsx>{`
              .counter-box {
                color: #fff;
                text-align: center;
              }
              @media (min-width: 577px) {
                .counter-box {
                  margin-bottom: 1.8rem;
                }
              }

              .counter-ico {
                margin-bottom: 1rem;
              }

              .counter-ico .ico-circle {
                height: 60px;
                width: 60px;
                line-height: 1.8;
                box-shadow: 0 0 0 10px #cde1f8;
              }

              .counter-num .counter {
                display: block;
                font-size: 2rem;
                margin-bottom: 0;
              }

              .overlay-mf {
                background-color: #0078ff;
              }

              .overlay-mf {
                position: absolute;
                top: 0;
                left: 0px;
                padding: 0;
                height: 100%;
                width: 100%;
                opacity: .7;
              }
          `}</style>
          </>
          </div>
      );
    }
  };
