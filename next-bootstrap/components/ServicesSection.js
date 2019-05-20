import React, { Component } from 'react'

export default class ServicesSection extends Component {
  render() {
    return (
      <div>
  <React.Fragment> 
      <section id="service" className="services-mf route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Experiance
                </h3>
                <p className="subtitle-a">
                  The tech world moves fast and you have to be ready to learn new skills. Here is small and incomplete list of some technologies I work with and have experiance in.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-code-working" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Development</h2>
                  <p className="s-description text-center">
                    Coding the web since 2013. It's one of the most rewarding things to do because after the problems are solved, you've made something and its live to the word.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-android-phone-portrait" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Responsive Design</h2>
                  <p className="s-description text-center">
                    Responsive Design has been incorporated into every single site I've ever built. It never has been and never will be an after thought or "extra" service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-monitor" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Design</h2>
                  <p className="s-description text-center">
                    I wouldn't call myself a designer because I rarely use photoshop but I understand design theory and applications and strongly advocate for user experiance improvements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-ios-people" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Mentoring &amp; CoWorking</h2>
                  <p className="s-description text-center">
                    After working in tech for several years, I've been able to give back by mentoring others both online and as a teaching assisant at the university of arizona coding bootcamp.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-wifi" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Cloud/Server</h2>
                  <p className="s-description text-center">
                    I'm not a network engineer but I've setup custom servers, have two at my house and know how to use nmap, postman, burp, splunk(email), cpanel, and others.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-ribbon-a" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Awards</h2>
                  <p className="s-description text-center">
                    I haven't gotten any desgin awards for css but one of the proudest moments in my life has been winning a <a href="http://aztechbeat.com/2014/07/startup-weekend-chandler-2014/" style={{fontWeight: 'bold'}}>Startup Weekend</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
  </React.Fragment>
  <style jsx>{`
  .service-box {
    background-color: #fff;
    padding: 2.5rem 1.3rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
  }
  
  .service-box:hover .ico-circle {
    transition: all 500ms ease;
    color: #fff;
    background-color: #0078ff;
    box-shadow: 0 0 0 10px #cde1f8;
  }
  
  .service-box .service-ico {
    margin-bottom: 1rem;
    color: #1e1e1e;
  }
  
  .service-box .ico-circle {
    transition: all 500ms ease;
    font-size: 4rem;
  }
  
  .service-box .s-title {
    font-size: 1.4rem;
    text-transform: uppercase;
    text-align: center;
    padding: .4rem 0;
  }
  
  .service-box .s-description {
    color: #4e4e4e;
  }
  `}</style>
      </div>
    )
  }
}
