import Head from 'next/head';
import React, { Component } from 'react';
// import IndexNav from '../components/IndexNav';
// import NavigationBar from '../components/NavigationBar';

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BlogSection from '../components/BlogSection';

import { 
  Card,
  Container,
  Row,
  Col,
  Media,
  Jumbotron,
  Button
} from 'react-bootstrap';


export default class index extends Component {
  render() {
    return (

<React.Fragment>
  <Layout >
    {/* <NavigationBar /> */}
    {/* <IndexNav /> */}
    <HomeHero />
    <AboutSection />
    <ServicesSection />
    <BlogSection />
  </Layout>


<style jsx>{`  


body {
  background-color: #f5f5f5;
  color: #4e4e4e;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #1e1e1e;
}

a {
  color: #1e1e1e;
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: #0078ff;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

.p-r {
  position: relative;
}

.color-a {
  color: #0078ff;
}

.color-d {
  color: #f5f5f5;
}

.color-text-a {
  color: #4e4e4e;
}

.box-shadow,
.paralax-mf,
.service-box,
.work-box,
.card-blog {
  box-shadow: 0 13px 8px -10px rgba(0, 0, 0, 0.1);
}

.box-shadow-a,
.button:hover {
  box-shadow: 0 0 0 4px #cde1f8;
}

.display-5 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-6 {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.1;
}

.avatar {
  width: 32px;
  height: 32px;
  margin-right: 4px;
  overflow: hidden;
}

.bg-image {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
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

.paralax-mf {
  position: relative;
  padding: 8rem 0;
}

.display-table {
  width: 100%;
  height: 100%;
  display: table;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
}

/*--/ Sections /--*/

.sect-4 {
  padding: 4rem 0;
}

.sect-pt4 {
  padding-top: 4rem;
}

.sect-mt4 {
  margin-top: 4rem;
} 
`}</style>
</React.Fragment>
    )
  }
}
