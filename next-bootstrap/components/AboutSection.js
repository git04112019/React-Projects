import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend 
} 
from 'recharts';
const data = [
  {
    "subject": "Html",
    "A": 100,
    "fullMark": 100
  },
  {
    "subject": "CSS",
    "A": 98,
    "fullMark": 100
  },
  {
    "subject": "JS",
    "A": 80,
    "fullMark": 100
  },
  {
    "subject": "PHP",
    "A": 80,
    "fullMark": 100
  },
  {
    "subject": "Learning",
    "A": 99,
    "fullMark": 100
  },
  {
    "subject": "DevOp",
    "A": 65,
    "fullMark": 100
  }
]

const AboutSection = () => (
  <React.Fragment>   



      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src="/static/img/hansmcmurdy.png" className="img-fluid rounded b-shadow-a" style={{height: '9em'}} />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p><span className="title-s">Name: </span> <span>Hans McMurdy</span></p>
                          <a href="https://github.com/hansuxdev" className=" fa fa-github-square" />
                          <a href="https://www.linkedin.com/in/brett-hans-mcmurdy-0a44a641/" className=" fa fa-linkedin-square" />
                          <a href="https://codepen.io/HansUXdev/" className=" fa fa-codepen" />
                          <a href="https://medium.com/@HansOnConsult" className=" fa fa-medium" />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      <ResponsiveContainer width={300} minWidth={200} height={300}>
                          <RadarChart outerRadius={90} width={300} height={250} data={data}>
                            <Radar name="Skills" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Legend />
                          </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          About me
                        </h5>
                      </div>
                      <p className="lead">
                        This is the hardest part of the whole site. I'd rather talk to people in person about various projects, startups, etc than editing a personal website.
                      </p>
                      <p className="lead">
                        <b>Verbs</b> that describe me: <br />
                        Code, Make, Build, Game
                      </p>
                      <p className="lead">
                        I try to live passionately which is way when I get things done and here are just a few examples.
                        <br />
                        Coding - I've built multiple CLI tools for fun. Most of it pretty hacky but they've gotten the job done. Check out my github.
                        <br />
                        Make/Build - I don't just code and game, I make stuff like metal smelters, jewerly for wife, simple circuit boards and other fun stuff.
                        <br />
                        Gaming - I've been in the top 200 global leadership boards in Battlefield Bad company 2, Battlefield 1, 3, 4, 5 and Medal of honor. In multiple categories, knife kills, longest headshot, tank kills, jet kills, etc. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


  <style jsx>{`

    .fa{
      font-size: 2em;
      margin: auto 5px;
    }
    a.fa.fa-linkedin-square{
      color: #0078ff;
    }

    .about-mf .box-shadow-full {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    .about-mf .about-img {
      margin-bottom: 2rem;
    }

    .about-mf .about-img img {
      margin-left: 10px;
    }

    .skill-mf span {
      color: #4e4e4e;
    }

    .skill-mf .progress {
      background-color: #cde1f8;
      margin: .5rem 0 1.2rem 0;
      border-radius: 0;
      height: .7rem;
    }

    .skill-mf .progress .progress-bar {
      height: .7rem;
      background-color: #0078ff;
    }
  `}</style>
</React.Fragment>
);


export default AboutSection;