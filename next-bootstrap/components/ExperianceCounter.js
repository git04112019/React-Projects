import React, { Component } from 'react';
import CounterBox from './CounterBox';
import { 
   Row,
   Col,
   Container 
  } from 'react-bootstrap';

// import counterCSS from '../static/css/counter.css'

const BGimg = "/static/img/counters-bg.jpg";


const ExperianceCounter = () => {

  return (
      <div className="section-counter paralax-mf bg-image" >
              <div className="overlay-mf" />
              <Container>
                <Row>
                  <Col sm="3" lg="3">
                      <CounterBox 
                        icon="ion-checkmark-round" 
                        number="5" 
                        text="Years of experiance"
                      />
                  </Col>
                  <Col sm="3" lg="3">
                      <CounterBox 
                        icon="ion-ios-calendar-outline" 
                        number="50" 
                        text="PROJECTS"
                      />
                  </Col>
                  <Col sm="3" lg="3">
                      <CounterBox 
                        icon="ion-ios-people" 
                        number="20" 
                        text="TOTAL CLIENTS"
                      />
                  </Col>
                  <Col sm="3" lg="3">
                      <CounterBox 
                        icon="ion-ribbon-a" 
                        number="4" 
                        text="AWARD WON"
                      />
                  </Col>
                </Row>
              </Container>
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
            `}</style>
            </>
      </div>
  );
}

export default ExperianceCounter;