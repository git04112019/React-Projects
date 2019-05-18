import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

export default class FancyName extends Component {
  render() {
    return (
      <React.Fragment>
        <Scrollspy items={ ['', 'about'] } scrolledPastClassName="name-active"  componentTag="div">
        <div className="animate-name">
          <div className="first-name">
            <span>H</span>
            <span>A</span>
            <span>N</span>
            <span>S</span>
          </div>
          <div className="last-name">                
            <span>MCMURDY</span>
          </div>
        </div>
        </Scrollspy>

        <style jsx>{`
          .animate-name {
            font-size: 1.5em;
            font-family: 'Playfair Display';
            font-weight: 400;
            outline: none;
            text-decoration: none;
            position: relative;
            color: #c5c2b8;
            display: inline-block;
            overflow: hidden;
            line-height: 0.75;
            padding: 0 0 5px;
          }

          .animate-name:hover,
          .animate-name.name-active {
            color: #b92025;
          }
          .animate-name::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            height: 16px;
            width: 100%;
            margin-top: -8px;
            background: #b92025;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            transition: -webkit-transform 0.4s;
            transition: transform 0.4s;
            transition: transform 0.4s, -webkit-transform 0.4s;
            transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
          }
          .animate-name:hover::after,
          .animate-name.name-active::after {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }
          .animate-name::before {
            content: attr(data-letters);
            position: absolute;
            z-index: 2;
            overflow: hidden;
            color: #424242;
            white-space: nowrap;
            width: 0%;
            transition: width 0.4s 0.3s;
          }
          .animate-name:hover::before,
          .animate-name.name-active::before {
            width: 100%;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
          .animate-name::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            -webkit-transform: translate3d(-101%, 0, 0);
            transform: translate3d(-101%, 0, 0);
            transition: -webkit-transform 0.5s;
            transition: transform 0.5s;
            transition: transform 0.5s, -webkit-transform 0.5s;
          }
          .animate-name span {
            display: inline-block;
            position: relative;
            -webkit-transform: perspective(1000px) rotate3d(0, 1, 0, 0deg);
            transform: perspective(1000px) rotate3d(0, 1, 0, 0deg);
            transition: color 0.5s, -webkit-transform 0.5s;
            transition: transform 0.5s, color 0.5s;
            transition: transform 0.5s, color 0.5s, -webkit-transform 0.5s;
          }
          .animate-name:hover span,
          .animate-name.name-active span {
            color: #b92025;
            -webkit-transform: perspective(1000px) rotate3d(0, 1, 0, 360deg);
            transform: perspective(1000px) rotate3d(0, 1, 0, 360deg);
          }
          .animate-name span:nth-child(4), .animate-name:hover span:first-child,
          .animate-name.name-active span:first-child{
            transition-delay: 0s;
          }
          .animate-name span:nth-child(3), .animate-name:hover span:nth-child(2),
          .animate-name.name-active span:nth-child(2) {
            transition-delay: 0.1s;
          }
          .animate-name span:nth-child(2), .animate-name:hover span:nth-child(3),
          .animate-name.name-active span:nth-child(3) {
            transition-delay: 0.2s;
          }
          .animate-name span:first-child, .animate-name:hover span:nth-child(4),
          .animate-name.name-active span:nth-child(4) {
            transition-delay: 0.3s;
          }
          .animate-name:before {
            border-width: 2px 0;
            border-color: #b92025;
            border-style: solid;
          }
          .animate-name > * {
            margin-top: 5px;
          }
        `}</style>
</React.Fragment>
    )
  }
}




